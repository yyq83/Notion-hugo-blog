import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://yangyinqi.notion.site/Notion-DoIt-13b94b203a2c808eabd9d83cd76c1391?pvs=4',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '13b94b203a2c813b9b88c3cb99151074',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: '13b94b203a2c817a8e2be030a6281735',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
