import { Db } from '@proteinjs/db';
import { tables } from '../tables/tables';

export async function destroySession(sessionId?: string) {
    if (!sessionId)
        return;

    await new Db().delete(tables.Session, { sessionId });
}