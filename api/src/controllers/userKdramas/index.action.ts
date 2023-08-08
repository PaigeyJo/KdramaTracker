import type { Request, PaginatedResponse, NextFunction } from '@@types/express.js';

import { UserKdrama } from "@@entities/index.js";

import { entities, errors, pagination } from '@@utils/index.js';

async function index(req: Request, res: PaginatedResponse, next: NextFunction) {

    const { limit, offset} = res.locals.pagination;

    const [userKdramas, err] = await entities.indexAndCount<UserKdrama>(UserKdrama, {
        limit, offset
    });

    if(err || !userKdramas) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to find User Kdrama",
            entityReturn: userKdramas,
            missingEntityReturnMessage: "No User Kdrama Returned"
        });
    }

    const response = pagination.paginateResponse<UserKdrama>(req, res, userKdramas);
    return res.json(response);
};

export default index;