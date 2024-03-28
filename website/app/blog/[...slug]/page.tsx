import { allArticles } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

interface ArticlePageProps {
  params: {
    slug: string[]
  }
}

async function getArticleFromParams(params: ArticlePageProps["params"]) {
  const slug = params?.slug?.join("/")
  const article = allArticles.find((article) => article.slugAsParams === slug)

  if (!article) {
    null
  }

  return article
}

export async function generateStaticParams(): Promise<
  ArticlePageProps["params"][]
> {
  return allArticles.map((article) => ({
    slug: article.slugAsParams.split("/"),
  }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = await getArticleFromParams(params)

  if (!post) {
    return {}
  }

  return (
    <div>
      <article className="text-content">
        <Mdx code={post.body.code} />
      </article>
    </div>
  )
}
