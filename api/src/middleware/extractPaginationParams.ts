import { Request, NextFunction, PaginatedResponse } from '@@types/express.js';
import { DEFAULTS } from '@@constants/index.js';

function extractPaginationParams(req: Request<any>, res: PaginatedResponse, next: NextFunction) {

    const page: number = typeof req.query.page === "string" ? parseInt(req.query.page, 10) : 1;
    const limit: number = DEFAULTS.LIMIT;
    const offset: number = limit * (page - 1);

    res.locals.pagination = {
        page, limit, offset
    };

    next();
};

export default extractPaginationParams;