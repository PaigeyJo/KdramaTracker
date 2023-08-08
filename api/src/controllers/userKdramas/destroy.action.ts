import { Request, Response, NextFunction } from '@@types/express.js';
import { UserKdrama } from '@@entities/index.js';

import { entities, errors } from "@@utils/index.js";

interface Params {
    id?: number
};

async function destory(req: Request<any, Params>, res: Response, next: NextFunction) {
    const { id } = req.params;
   
    if(!id){
        return errors.sendInvalidBody(res);
    }
    
    const [userKdrama, findErr] = await entities.findOne<UserKdrama>(UserKdrama, {
        where: {
            id: id
        }
    });

    if(findErr || !userKdrama) {
        return errors.sendEntitiesResponse({
            res,
            err: findErr,
            message: "Unable to find User Kdrama",
            entityReturn: userKdrama,
            missingEntityReturnMessage: "No User Kdrama Returned"
        });
    }

    const [deletedUserKdrama, deleteErr] = await entities.destroy<UserKdrama>(UserKdrama, userKdrama);

    if(deleteErr || !deletedUserKdrama) {
        return errors.sendEntitiesResponse({
            res,
            err: deleteErr,
            message: "Unable to delete User Kdrama",
            entityReturn: deletedUserKdrama,
            missingEntityReturnMessage: "No User Kdrama Returned"
        });
    }

    return res.json({ results: deletedUserKdrama });
};

export default destory;