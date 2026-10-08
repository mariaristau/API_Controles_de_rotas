import express from "express";
import {
    cadastrarSetor,
    listarSetores,
    excluirSetor,
    atualizarSetor,
    buscarSetorPorIndice
} from "../controller/setoresController.js";

const router = express.Router();

router.post("/", cadastrarSetor);
router.get("/", listarSetores);
router.delete("/:indice", excluirSetor);
router.patch("/:indice", atualizarSetor);
router.get("/:indice", buscarSetorPorIndice);

export default router;