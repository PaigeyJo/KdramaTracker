import { Request, Response, NextFunction } from '@@types/express.js';
import { KDrama } from '@@entities/index.js';

import { entities, errors } from '@@utils/index.js';

interface Body {
    id?: number,
    name?: string,
    poster_image?: string,
    episode_count?: number,
    airing?: boolean
};

async function update(req: Request<Body>, res: Response, next: NextFunction) {
    const { id, name, poster_image, episode_count, airing } = req.body;

    if(!id || !name || !poster_image || !episode_count || !airing) {
        return errors.sendInvalidBody(res);
    }

    const [kDramas, findErr] = await entities.findOne<KDrama>(KDrama, {
        where: {
            id: id
        }
    });

    if(findErr || !kDramas) {
        return errors.sendEntitiesResponse({
            res,
            err: findErr,
            message: "Unable to find Kdrama",
            entityReturn: kDramas,
            missingEntityReturnMessage: "No kdrama Returned"
        });
    }

    const [updatedKDrama, updateErr] = await entities.update<KDrama>(KDrama, {
        ...kDramas,
        name,
        poster_image,
        episode_count,
        airing
    });

    if(updateErr || !updatedKDrama) {
        return errors.sendEntitiesResponse({
            res,
            err: updateErr,
            message: "Unable to update Kdrama",
            entityReturn: updatedKDrama,
            missingEntityReturnMessage: "No Kdrama Returned"
        });
    }

    return res.json({ results: updatedKDrama });

};

export default update;