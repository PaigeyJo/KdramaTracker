import { Request, Response, NextFunction } from '@@types/express.js';
import { KDrama } from '@@entities/index.js';

import { entities, errors } from '@@utils/index.js';

interface Params {
    id?: number
};

async function destroy(req: Request<any, Params>, res: Response, next: NextFunction) {

    const { id } = req.params;

    if(!id) {
        return errors.sendInvalidBody(res);
    }

    const [kdrama, findErr] = await entities.findOne<KDrama>(KDrama, {
        where: {
            id
        }
    });

    if(findErr || !kdrama) {
        return errors.sendEntitiesResponse({
            res,
            err: findErr,
            message: "Unable to delete Kdrama",
            entityReturn: kdrama,
            missingEntityReturnMessage: "No Kdrama Returned"
        });
    }

    const [destroyedKdrama, err] = await entities.destroy<KDrama>(KDrama, kdrama);

    if(err || !destroyedKdrama) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to delete Kdrama",
            entityReturn: destroyedKdrama,
            missingEntityReturnMessage: "No Kdrama Returned"
        });
    }

    return res.json({ results: destroyedKdrama });
};

export default destroy;