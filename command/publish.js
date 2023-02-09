'use strict';

const Command = require('common-bin');
const initConfig = require('../config'); // 初始化 config
const Downloader = require('../lib/Downloader');
const out = require('../lib/out');

class PublishCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: yuque-hexo publish';
  }

  async run() {
    if (!initConfig) {
      process.exit(0);
    }

    const downloader = new Downloader(initConfig);
    await downloader.publishArticle();
    out.info('yuque-hexo publish done!');
  }
}

module.exports = PublishCommand;