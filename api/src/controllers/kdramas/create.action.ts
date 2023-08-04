import { Request, Response, NextFunction } from '@@types/express.js';
import { KDrama } from '@@entities/index.js';

import { entities, errors } from '@@utils/index.js';

interface Body {
    name?: string,
    poster_image?: string,
    episode_count?: number,
    airing?: boolean
};

async function create(req: Request<Body>, res: Response, next: NextFunction) {
    
    const { name, poster_image, episode_count, airing } = req.body;

    if(!name || !poster_image || !episode_count || !airing) {
        return errors.sendInvalidBody(res);
    }
    
    const [kdrama, err] = await entities.insert<KDrama>(KDrama, {
        name,
        poster_image,
        episode_count,
        airing
    });

    if(err || !kdrama) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to save Kdrama",
            entityReturn: kdrama,
            missingEntityReturnMessage: "No Kdrama Returned"
        });
    }

    return res.json({ results: kdrama })
};

export default create;