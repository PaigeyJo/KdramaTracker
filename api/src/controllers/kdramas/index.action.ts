import { Request, NextFunction, PaginatedResponse } from '@@types/express.js';

import { KDrama } from '@@entities/index.js';

import { entities, errors, pagination } from '@@utils/index.js';

async function index(req: Request, res: PaginatedResponse, next: NextFunction) {

    const { limit, offset } = res.locals.pagination;

    const [kDramas, err] = await entities.indexAndCount<KDrama>(KDrama, {
        limit, offset
    });

    if(err || !kDramas) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to find Kdrama",
            entityReturn: kDramas,
            missingEntityReturnMessage: "No Kdrama Returned"
        });
    }
    const response = pagination.paginateResponse<KDrama>(req, res, kDramas);
    return res.json(response);
};

export default index;