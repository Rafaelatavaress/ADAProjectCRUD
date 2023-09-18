    import { Request, Response, NextFunction } from "express";

    

    const requestLoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
        console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
        next();
    };

    

    const errorHandlerMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
        console.error("Erro:", error.message);
        res.status(500).json({ error: "Ocorreu um erro no servidor." });
    };

    

    export { requestLoggerMiddleware, errorHandlerMiddleware };