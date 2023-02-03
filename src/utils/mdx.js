import fs from "fs"
import path from "path";
import matter from "gray-matter";

export async function getAllScribbles() {
    const files = fs.readdirSync(path.join('src', 'scribbles'))

    const scribbles = files.map(filename => {
        const markDownMetaData = fs.readFileSync(path.join('src', 'scribbles', filename))
        const { data: frontmatter } = matter(markDownMetaData)
        return { frontmatter, slug: filename.split('.')[0] }
    })
    return { props: { scribbles } }
}

export async function getAllScribblesByTag(tag) {
    console.log(tag)
    const files = fs.readdirSync(path.join('src', 'scribbles'))

    const scribbles = files.map(filename => {
        const markDownMetaData = fs.readFileSync(path.join('src', 'scribbles', filename))
        const { data: frontmatter } = matter(markDownMetaData)
        return { frontmatter, slug: filename.split('.')[0] }
    })

    const filteredScribbles = scribbles.filter((it) => it.frontmatter.tags.includes(tag))
    return { props: { scribbles: filteredScribbles } }
}