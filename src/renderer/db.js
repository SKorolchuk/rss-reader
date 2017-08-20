import jetpack from 'fs-jetpack';
import fs from 'fs';
import DataStore from 'nedb';
import { remote } from 'electron';

export default class {
  constructor() {
    this.db = null;
    this.useDataDir = jetpack.cwd(remote.app.getPath('userData'));
  }

  createOrReadDatabase(dbname) {
    const database = {};
    const yesArticle = fs.existsSync(this.useDataDir.path(dbname.article));
    const yesTag = fs.existsSync(this.useDataDir.path(dbname.tag));
    const yesFeed = fs.existsSync(this.useDataDir.path(dbname.feed));

    if (!yesArticle && !yesTag && !yesFeed) {
      this.useDataDir.write(dbname.article);
      this.useDataDir.write(dbname.tag);
      this.useDataDir.write(dbname.feed);
    }

    database.article = new DataStore({
      filename: this.useDataDir.path(dbname.article),
      autoload: true,
    });
    database.tag = new DataStore({
      filename: this.useDataDir.path(dbname.tag),
      autoload: true,
    });
    database.feed = new DataStore({
      filename: this.useDataDir.path(dbname.feed),
      autoload: true,
    });

    return database;
  }

  init() {
    if (this.db) {
      return this.db;
    }
    this.db = this.createOrReadDatabase({
      article: 'articles.db',
      feed: 'feeds.db',
    });
    return this.db;
  }
}
