import { Request, Response, NextFunction } from '@@types/express.js';
import { UserKdrama } from '@@entities/index.js';

import { entities, errors } from '@@utils/index.js';

interface Body {
    id?: number,
    user_id?: number,
    kdrama_id?: number,
    episodes_watched?: number,
    rating?: number,
    started_on?: Date,
    finished_on?: Date
};

async function create(req: Request<Body>, res: Response, next: NextFunction) {
    const { id, user_id, kdrama_id, episodes_watched, rating, started_on, finished_on } = req.body;

    if(!id || !user_id || !kdrama_id || !episodes_watched || !rating || !started_on || !finished_on) {
        return errors.sendInvalidBody(res);
    }

    const [userKdrama, err] = await entities.insert<UserKdrama>(UserKdrama, {
        id,
        user_id,
        kdrama_id,
        episodes_watched,
        rating,
        started_on,
        finished_on
    });

    if(err || !userKdrama) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to save User Kdrama",
            entityReturn: userKdrama,
            missingEntityReturnMessage: "No User Kdrama Returned"

        });
    }

    return res.json({ results: userKdrama })
};

export default create;