import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient

export async function createBlog(title: string, description: string, markdown: string){
    return await prisma.blog.create({
        data: {
            title: title,
            description: description,
            markdown: markdown
        }
    })
}


export async function getBlogs(){
    try {
        return await prisma.blog.findMany()
    } catch (error) {
        console.log(error);
    }
}

export async function getBlogById (id: number){
    try {
        return await prisma.blog.findMany({
            where:{
                id: id
        }})
    } catch (error) {
        console.log(error);
    }
}


export async function updateBlog (id:number, title: string, description: string,markdown: string){
    const updatedBlog = prisma.blog.update({
        where:{ id },
        data:{
            title: title,
            description: description,
            markdown: markdown
        }
    })
    return updatedBlog
}

export async function deleteBlog (id:number){
    await prisma.blog.delete({
        where: {id}
    })
}