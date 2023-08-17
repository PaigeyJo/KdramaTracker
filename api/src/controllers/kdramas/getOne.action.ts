import { Request, Response, NextFunction } from '@@types/express.js';
import { KDrama } from '@@entities/index.js';

import { entities, errors } from '@@utils/index.js';

interface Params {
    id?: number
};

 async function getOne(req: Request<any, Params>, res: Response, next: NextFunction) {
    const { id } = req.params;

    if(!id){
        return errors.sendInvalidBody(res);
    }

    const [kDrama, findErr] = await entities.findOne<KDrama>(KDrama, {
        where: {
            id: id
        }
    });

    if(findErr || !kDrama) {
        return errors.sendEntitiesResponse({
            res,
            err: findErr,
            message: "Unable to find Kdrama",
            entityReturn: kDrama,
            missingEntityReturnMessage: "No Kdrama Returned"
        });
    }
    
    return res.json({ results: kDrama });

};

export default getOne;