"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import { connectToDataBase } from "../database"
import Category from "../database/models/category.model"

export const createCategory = async ({categoryName}: CreateCategoryParams) => {
    try {
        await connectToDataBase()

        const newCategory = await Category.create({name: categoryName})
    } catch (error) {
        handleError(error)
    }
}