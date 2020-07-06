// =====================================================
// WARNING: GENERATED FILE
//
// Any changes you make will be overwritten by Lamington
// =====================================================

import { Account, Contract, GetTableRowsOptions, ExtendedAsset, ExtendedSymbol, ActorPermission, TableRowsResult } from 'lamington';

// Table row types
export interface AtomicassetsFORMAT {
	name: string;
	type: string;
}

export interface AtomicassetsAcceptoffer {
	offer_id: number;
}

export interface AtomicassetsAddcolauth {
	collection_name: string|number;
	account_to_add: string|number;
}

export interface AtomicassetsAddconftoken {
	token_contract: string|number;
	token_symbol: string;
}

export interface AtomicassetsAddnotifyacc {
	collection_name: string|number;
	account_to_add: string|number;
}

export interface AtomicassetsAdmincoledit {
	collection_format_extension: Array<string>;
}

export interface AtomicassetsAnnouncedepo {
	owner: string|number;
	symbol_to_announce: string;
}

export interface AtomicassetsAssetsS {
	asset_id: number;
	collection_name: string|number;
	schema_name: string|number;
	template_id: number;
	ram_payer: string|number;
	backed_tokens: Array<string>;
	immutable_serialized_data: Array<number>;
	mutable_serialized_data: Array<number>;
}

export interface AtomicassetsBackasset {
	payer: string|number;
	asset_owner: string|number;
	asset_id: number;
	token_to_back: string;
}

export interface AtomicassetsBalancesS {
	owner: string|number;
	quantities: Array<string>;
}

export interface AtomicassetsBurnasset {
	asset_owner: string|number;
	asset_id: number;
}

export interface AtomicassetsCanceloffer {
	offer_id: number;
}

export interface AtomicassetsCollectionsS {
	collection_name: string|number;
	author: string|number;
	allow_notify: boolean;
	authorized_accounts: Array<string|number>;
	notify_accounts: Array<string|number>;
	market_fee: string;
	serialized_data: Array<number>;
}

export interface AtomicassetsConfigS {
	asset_counter: number;
	template_counter: number;
	offer_counter: number;
	collection_format: Array<string>;
	supported_tokens: Array<ExtendedSymbol>;
}

export interface AtomicassetsCreatecol {
	author: string|number;
	collection_name: string|number;
	allow_notify: boolean;
	authorized_accounts: Array<string|number>;
	notify_accounts: Array<string|number>;
	market_fee: string;
	data: string;
}

export interface AtomicassetsCreateoffer {
	sender: string|number;
	recipient: string|number;
	sender_asset_ids: Array<number>;
	recipient_asset_ids: Array<number>;
	memo: string;
}

export interface AtomicassetsCreateschema {
	authorized_creator: string|number;
	collection_name: string|number;
	schema_name: string|number;
	schema_format: Array<string>;
}

export interface AtomicassetsCreatetempl {
	authorized_creator: string|number;
	collection_name: string|number;
	schema_name: string|number;
	transferable: boolean;
	burnable: boolean;
	max_supply: number;
	immutable_data: string;
}

export interface AtomicassetsDeclineoffer {
	offer_id: number;
}

export interface AtomicassetsExtendedSymbol {
	symbol: string;
	contract: string|number;
}

export interface AtomicassetsExtendschema {
	authorized_editor: string|number;
	collection_name: string|number;
	schema_name: string|number;
	schema_format_extension: Array<string>;
}

export interface AtomicassetsForbidnotify {
	collection_name: string|number;
}

export interface AtomicassetsInit {
}

export interface AtomicassetsLocktemplate {
	authorized_editor: string|number;
	collection_name: string|number;
	template_id: number;
}

export interface AtomicassetsLogbackasset {
	asset_owner: string|number;
	asset_id: number;
	backed_token: string;
}

export interface AtomicassetsLogburnasset {
	asset_owner: string|number;
	asset_id: number;
	collection_name: string|number;
	schema_name: string|number;
	template_id: number;
	backed_tokens: Array<string>;
	old_immutable_data: string;
	old_mutable_data: string;
	asset_ram_payer: string|number;
}

export interface AtomicassetsLogmint {
	asset_id: number;
	authorized_minter: string|number;
	collection_name: string|number;
	schema_name: string|number;
	template_id: number;
	new_asset_owner: string|number;
	immutable_data: string;
	mutable_data: string;
	backed_tokens: Array<string>;
}

export interface AtomicassetsLognewoffer {
	offer_id: number;
	sender: string|number;
	recipient: string|number;
	sender_asset_ids: Array<number>;
	recipient_asset_ids: Array<number>;
	memo: string;
}

export interface AtomicassetsLognewtempl {
	template_id: number;
	authorized_creator: string|number;
	collection_name: string|number;
	schema_name: string|number;
	transferable: boolean;
	burnable: boolean;
	max_supply: number;
	immutable_data: string;
}

export interface AtomicassetsLogsetdata {
	asset_owner: string|number;
	asset_id: number;
	old_data: string;
	new_data: string;
}

export interface AtomicassetsLogtransfer {
	collection_name: string|number;
	from: string|number;
	to: string|number;
	asset_ids: Array<number>;
	memo: string;
}

export interface AtomicassetsMintasset {
	authorized_minter: string|number;
	collection_name: string|number;
	schema_name: string|number;
	template_id: number;
	new_asset_owner: string|number;
	immutable_data: string;
	mutable_data: string;
	tokens_to_back: Array<string>;
}

export interface AtomicassetsOffersS {
	offer_id: number;
	sender: string|number;
	recipient: string|number;
	sender_asset_ids: Array<number>;
	recipient_asset_ids: Array<number>;
	memo: string;
	ram_payer: string|number;
}

export interface AtomicassetsPairStringVariantInt8Int16Int32Int64Uint8Uint16Uint32Uint64Float32Float64StringINT8VECINT16VECINT32VECINT64VECUINT8VECUINT16VECUINT32VECUINT64VECFLOATVECDOUBLEVECSTRINGVEC {
	key: string;
	value: string;
}

export interface AtomicassetsPayofferram {
	payer: string|number;
	offer_id: number;
}

export interface AtomicassetsRemcolauth {
	collection_name: string|number;
	account_to_remove: string|number;
}

export interface AtomicassetsRemnotifyacc {
	collection_name: string|number;
	account_to_remove: string|number;
}

export interface AtomicassetsSchemasS {
	schema_name: string|number;
	format: Array<string>;
}

export interface AtomicassetsSetassetdata {
	authorized_editor: string|number;
	asset_owner: string|number;
	asset_id: number;
	new_mutable_data: string;
}

export interface AtomicassetsSetcoldata {
	collection_name: string|number;
	data: string;
}

export interface AtomicassetsSetmarketfee {
	collection_name: string|number;
	market_fee: string;
}

export interface AtomicassetsSetversion {
	new_version: string;
}

export interface AtomicassetsTemplatesS {
	template_id: number;
	schema_name: string|number;
	transferable: boolean;
	burnable: boolean;
	max_supply: number;
	issued_supply: number;
	immutable_serialized_data: Array<number>;
}

export interface AtomicassetsTokenconfigsS {
	standard: string|number;
	version: string;
}

export interface AtomicassetsTransfer {
	from: string|number;
	to: string|number;
	asset_ids: Array<number>;
	memo: string;
}

export interface AtomicassetsWithdraw {
	owner: string|number;
	token_to_withdraw: string;
}

export interface Atomicassets extends Contract {
	// Actions
	acceptoffer(offer_id: number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	addcolauth(collection_name: string|number, account_to_add: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	addconftoken(token_contract: string|number, token_symbol: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	addnotifyacc(collection_name: string|number, account_to_add: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	admincoledit(collection_format_extension: Array<AtomicassetsFORMAT>, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	announcedepo(owner: string|number, symbol_to_announce: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	backasset(payer: string|number, asset_owner: string|number, asset_id: number, token_to_back: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	burnasset(asset_owner: string|number, asset_id: number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	canceloffer(offer_id: number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	createcol(author: string|number, collection_name: string|number, allow_notify: boolean, authorized_accounts: Array<string|number>, notify_accounts: Array<string|number>, market_fee: string, data: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	createoffer(sender: string|number, recipient: string|number, sender_asset_ids: Array<number>, recipient_asset_ids: Array<number>, memo: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	createschema(authorized_creator: string|number, collection_name: string|number, schema_name: string|number, schema_format: Array<AtomicassetsFORMAT>, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	createtempl(authorized_creator: string|number, collection_name: string|number, schema_name: string|number, transferable: boolean, burnable: boolean, max_supply: number, immutable_data: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	declineoffer(offer_id: number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	extendschema(authorized_editor: string|number, collection_name: string|number, schema_name: string|number, schema_format_extension: Array<AtomicassetsFORMAT>, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	forbidnotify(collection_name: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	init(options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	locktemplate(authorized_editor: string|number, collection_name: string|number, template_id: number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	logbackasset(asset_owner: string|number, asset_id: number, backed_token: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	logburnasset(asset_owner: string|number, asset_id: number, collection_name: string|number, schema_name: string|number, template_id: number, backed_tokens: Array<string>, old_immutable_data: string, old_mutable_data: string, asset_ram_payer: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	logmint(asset_id: number, authorized_minter: string|number, collection_name: string|number, schema_name: string|number, template_id: number, new_asset_owner: string|number, immutable_data: string, mutable_data: string, backed_tokens: Array<string>, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	lognewoffer(offer_id: number, sender: string|number, recipient: string|number, sender_asset_ids: Array<number>, recipient_asset_ids: Array<number>, memo: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	lognewtempl(template_id: number, authorized_creator: string|number, collection_name: string|number, schema_name: string|number, transferable: boolean, burnable: boolean, max_supply: number, immutable_data: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	logsetdata(asset_owner: string|number, asset_id: number, old_data: string, new_data: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	logtransfer(collection_name: string|number, from: string|number, to: string|number, asset_ids: Array<number>, memo: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	mintasset(authorized_minter: string|number, collection_name: string|number, schema_name: string|number, template_id: number, new_asset_owner: string|number, immutable_data: string, mutable_data: string, tokens_to_back: Array<string>, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	payofferram(payer: string|number, offer_id: number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	remcolauth(collection_name: string|number, account_to_remove: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	remnotifyacc(collection_name: string|number, account_to_remove: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	setassetdata(authorized_editor: string|number, asset_owner: string|number, asset_id: number, new_mutable_data: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	setcoldata(collection_name: string|number, data: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	setmarketfee(collection_name: string|number, market_fee: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	setversion(new_version: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	transfer(from: string|number, to: string|number, asset_ids: Array<number>, memo: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	withdraw(owner: string|number, token_to_withdraw: string, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	
	// Tables
	assetsTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsAssetsS>>;
	balancesTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsBalancesS>>;
	collectionsTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsCollectionsS>>;
	configTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsConfigS>>;
	offersTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsOffersS>>;
	schemasTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsSchemasS>>;
	templatesTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsTemplatesS>>;
	tokenconfigsTable(options?: GetTableRowsOptions): Promise<TableRowsResult<AtomicassetsTokenconfigsS>>;
}

