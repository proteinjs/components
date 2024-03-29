/** Load Dependency Source Graphs */

import '@brentbahry/reflection';
import '@brentbahry/util';
import '@emotion/react';
import '@emotion/styled';
import '@mui/icons-material';
import '@mui/material';
import '@proteinjs/db';
import '@proteinjs/ui';
import 'moment';
import 'react';
import 'string';
import 'uuid';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@proteinjs/db-ui/QueryTableLoader\",\"value\":{\"packageName\":\"@proteinjs/db-ui\",\"name\":\"QueryTableLoader\",\"filePath\":\"/Users/brentbahry/repos/components/db/ui/src/table/QueryTableLoader.ts\",\"qualifiedName\":\"@proteinjs/db-ui/QueryTableLoader\",\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\",\"properties\":[{\"name\":\"table\",\"type\":{\"packageName\":\"\",\"name\":\"Table<T>\",\"filePath\":null,\"qualifiedName\":\"/Table<T>\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"private\"},{\"name\":\"query\",\"type\":{\"packageName\":\"\",\"name\":\"Query<T>\",\"filePath\":null,\"qualifiedName\":\"/Query<T>\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":true,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"private\"},{\"name\":\"sort\",\"type\":{\"packageName\":\"\",\"name\":\"SortCriteria<T>[]\",\"filePath\":null,\"qualifiedName\":\"/SortCriteria<T>[]\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":true,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"private\"}],\"methods\":[{\"name\":\"load\",\"returnType\":{\"packageName\":\"\",\"name\":\"Promise<RowWindow<T>>\",\"filePath\":null,\"qualifiedName\":\"/Promise<RowWindow<T>>\",\"typeParameters\":null,\"directParents\":null},\"isAsync\":true,\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\",\"parameters\":[{\"name\":\"startIndex\",\"type\":{\"packageName\":\"\",\"name\":\"number\",\"filePath\":null,\"qualifiedName\":\"/number\",\"typeParameters\":null,\"directParents\":null}},{\"name\":\"endIndex\",\"type\":{\"packageName\":\"\",\"name\":\"number\",\"filePath\":null,\"qualifiedName\":\"/number\",\"typeParameters\":null,\"directParents\":null}}]}],\"typeParameters\":[\"/T extends Record\"],\"directParentInterfaces\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"TableLoader\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/TableLoader\",\"properties\":[],\"methods\":[],\"typeParameters\":[\"/T\"],\"directParents\":[]}],\"directParentClasses\":[],\"sourceType\":2}},{\"v\":\"@proteinjs/ui/TableLoader\"},{\"v\":\"@proteinjs/db-ui/recordFormPage\",\"value\":{\"packageName\":\"@proteinjs/db-ui\",\"name\":\"recordFormPage\",\"filePath\":\"/Users/brentbahry/repos/components/db/ui/src/pages/RecordFormPage.tsx\",\"qualifiedName\":\"@proteinjs/db-ui/recordFormPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/ui/Page\"},{\"v\":\"@proteinjs/db-ui/recordTablePage\",\"value\":{\"packageName\":\"@proteinjs/db-ui\",\"name\":\"recordTablePage\",\"filePath\":\"/Users/brentbahry/repos/components/db/ui/src/pages/RecordTablePage.tsx\",\"qualifiedName\":\"@proteinjs/db-ui/recordTablePage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/db-ui/tablesPage\",\"value\":{\"packageName\":\"@proteinjs/db-ui\",\"name\":\"tablesPage\",\"filePath\":\"/Users/brentbahry/repos/components/db/ui/src/pages/TablesPage.tsx\",\"qualifiedName\":\"@proteinjs/db-ui/tablesPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/db-ui/uuidGeneratorPage\",\"value\":{\"packageName\":\"@proteinjs/db-ui\",\"name\":\"uuidGeneratorPage\",\"filePath\":\"/Users/brentbahry/repos/components/db/ui/src/pages/UuidGeneratorPage.tsx\",\"qualifiedName\":\"@proteinjs/db-ui/uuidGeneratorPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}}],\"edges\":[{\"v\":\"@proteinjs/db-ui/QueryTableLoader\",\"w\":\"@proteinjs/ui/TableLoader\",\"value\":\"implements interface\"},{\"v\":\"@proteinjs/db-ui/recordFormPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"},{\"v\":\"@proteinjs/db-ui/recordTablePage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"},{\"v\":\"@proteinjs/db-ui/tablesPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"},{\"v\":\"@proteinjs/db-ui/uuidGeneratorPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"}]}";


/** Generate Source Links */

import { QueryTableLoader } from '../src/table/QueryTableLoader';
import { recordFormPage } from '../src/pages/RecordFormPage';
import { recordTablePage } from '../src/pages/RecordTablePage';
import { tablesPage } from '../src/pages/TablesPage';
import { uuidGeneratorPage } from '../src/pages/UuidGeneratorPage';

const sourceLinks = {
	'@proteinjs/db-ui/QueryTableLoader': QueryTableLoader,
	'@proteinjs/db-ui/recordFormPage': recordFormPage,
	'@proteinjs/db-ui/recordTablePage': recordTablePage,
	'@proteinjs/db-ui/tablesPage': tablesPage,
	'@proteinjs/db-ui/uuidGeneratorPage': uuidGeneratorPage,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@brentbahry/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';