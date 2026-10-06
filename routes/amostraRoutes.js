import express from "express";
import { 
    cadastrarAmostra,
    listarAmostras,
    excluirAmostra,
    atualizarAmostra,
    buscarAmostraPorIndice 
} from "../controller/amostraController.js";

const router = express.Router();

router.post("/", cadastrarAmostra);
router.get("/", listarAmostras);
router.patch("/:indice", atualizarAmostra);
router.delete("/:indice", excluirAmostra);
router.get("/:indice", buscarAmostraPorIndice);

export default router;