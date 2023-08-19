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

async function update(req: Request<Body>, res: Response, next: NextFunction) {
    const { id, user_id, kdrama_id, episodes_watched, rating, started_on, finished_on } = req.body;

    if(!id || !user_id || !kdrama_id || !episodes_watched || !rating || !started_on || !finished_on ) {
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
            missingEntityReturnMessage: "No User kdrama Returned"
        });
    }

    const [updatedUserKdrama, updateErr] = await entities.update<UserKdrama>(UserKdrama, {
        ...userKdrama,
        kdrama_id,
        episodes_watched,
        rating,
        started_on,
        finished_on
    });

    if(updateErr || !updatedUserKdrama) {
        return errors.sendEntitiesResponse({
            res,
            err: updateErr,
            message: "Unable to update User Kdrama",
            entityReturn: updatedUserKdrama,
            missingEntityReturnMessage: "No User kdrama Returned"
        });
    }

    return res.json({ results: updatedUserKdrama });
};

export default update;