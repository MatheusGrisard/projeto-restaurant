import type { Request, Response } from "express";
import Product from "../models/Product.js";

async function getAll(_req: Request, res: Response) {
    try {
        const products = await Product.findAll();

        res.status(200).json(products);
    } catch (error) {
        console.error("Erro ao buscar produtos: ", error);

        res.status(500).json({
            message: "Erro ao buscar produtos.",
        });
    }
}

export default { getAll };