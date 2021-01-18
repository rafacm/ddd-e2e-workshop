import jsonfile from "jsonfile";
import { Day } from "src/domain-model";

interface IDatabase {
  days: Day[];
}

export default class BaseFileBasedRepository {
  private static readonly dbFilePath = "src/daos/MockDb/MockDb.json";

  protected openDb(): Promise<IDatabase> {
    return jsonfile.readFile(
      BaseFileBasedRepository.dbFilePath
    ) as Promise<IDatabase>;
  }

  protected saveDb(db: IDatabase): Promise<void> {
    return jsonfile.writeFile(BaseFileBasedRepository.dbFilePath, db);
  }

  static clearDatabase(): void {
    jsonfile.writeFile(this.dbFilePath, {});
  }
}