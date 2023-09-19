/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ContactDTO,
  DIPSKodeverkVerdi,
  Gjennomforing43,
  Gjennomforing44,
  Gjennomforing48,
  IRettsligGrunnlag,
  Operation,
  Operation1,
  PatchLog,
  PatientInformation,
  ResponseRequisitionerDTO,
  RettsligGrunnlag102,
  RettsligGrunnlag103,
  RettsligGrunnlag104,
  RettsligGrunnlag21,
  RettsligGrunnlag22,
  RettsligGrunnlag32,
  RettsligGrunnlag33,
  RettsligGrunnlag35,
  RettsligGrunnlag41,
  RettsligGrunnlagAnnetRettsligGrunnlag,
  RettsligGrunnlagAvslutt102,
  RettsligGrunnlagAvslutt103,
  RettsligGrunnlagAvslutt104,
  RettsligGrunnlagAvslutt21,
  RettsligGrunnlagAvslutt22,
  RettsligGrunnlagAvslutt35,
  RettsligGrunnlagAvslutt37TO,
  RettsligGrunnlagAvslutt37TPH,
  RettsligGrunnlagAvslutt41,
  RettsligGrunnlagAvsluttAnnetRettsligGrunnlag,
  RettsligGrunnlagAvsluttDomPaaOverforingTilTPH,
  RettsligGrunnlagAvsluttDomPaaTvungenOmsorg,
  RettsligGrunnlagAvsluttTilbakeholdelse24Timer,
  RettsligGrunnlagDomPaaOverforingTilTPH,
  RettsligGrunnlagDomPaaTvungenOmsorg,
  RettsligGrunnlagKontrollUndersokelse,
  RettsligGrunnlagOpprettetVedAnnenInstitusjon,
  RettsligGrunnlagOverfoertFraAnnetForetak,
  RettsligGrunnlagOverforingAv32TilAnnenInstitusjon,
  RettsligGrunnlagOverforingAvDomfeltMellomTvangsformer,
  RettsligGrunnlagOverforingAvDomfeltTilAnnenInstitusjon,
  RettsligGrunnlagOverforingMellomTvangsformer,
  RettsligGrunnlagOverforingTilAnnenInstitusjon,
  RettsligGrunnlagSamtykkeForlengelseTO,
  RettsligGrunnlagSamtykkeForlengelseTPH,
  RettsligGrunnlagTilbakeholdelse24Timer,
  RettsligGrunnlagToTphIkkeEtableres,
  UserSettings,
  Vedtak43,
  Vedtak44,
  Vedtak45Innskrenket,
  Vedtak45Post,
  Vedtak46,
  Vedtak47,
  Vedtak47A,
  Vedtak48,
  Vedtak48A,
  Vedtak48B,
  Vedtak48C,
  Vedtak48D,
  Vedtak48HastevedtakFagligAnsvarlig,
  Vedtak4A,
  VedtakAvslutt43,
  VedtakAvslutt44,
  VedtakAvslutt45Innskrenket,
  VedtakAvslutt45Post,
  VedtakAvslutt4A6,
  VedtakAvslutt4ANattelaasing,
  VedtakAvslutt6,
  VedtakAvslutt7,
  VedtakECT,
  VedtakHolding,
  VedtakRus,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Contact
   * @name V1ContactDetail
   * @summary Get available contacts for a patient
   * @request GET:/api/v1/Contact/{patientId}
   * @secure
   */
  v1ContactDetail = (patientId: number, params: RequestParams = {}) =>
    this.request<ContactDTO[], void>({
      path: `/api/v1/Contact/${patientId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact
   * @name V1ContactListByPatientProxyIdDetail
   * @summary Get available contacts for a patient
   * @request GET:/api/v1/Contact/ListByPatientProxyId/{patientProxyId}
   * @secure
   */
  v1ContactListByPatientProxyIdDetail = (patientProxyId: string, params: RequestParams = {}) =>
    this.request<ContactDTO[], void>({
      path: `/api/v1/Contact/ListByPatientProxyId/${patientProxyId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags HealthCareParty
   * @name V1HealthCarePartySearchList
   * @summary Request requisitioners based on search term
   * @request GET:/api/v1/HealthCareParty/search
   * @secure
   */
  v1HealthCarePartySearchList = (
    query: {
      /** @minLength 3 */
      searchTerm: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseRequisitionerDTO[], void>({
      path: `/api/v1/HealthCareParty/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags HealthCareParty
   * @name V1HealthCarePartyDetail
   * @summary Request requisitioners based on id
   * @request GET:/api/v1/HealthCareParty/{id}
   * @secure
   */
  v1HealthCarePartyDetail = (id: number, params: RequestParams = {}) =>
    this.request<ResponseRequisitionerDTO, void>({
      path: `/api/v1/HealthCareParty/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Kodeverk
   * @name V1KodeverkList
   * @summary Get list of all kodeverksverdier
   * @request GET:/api/v1/Kodeverk
   * @secure
   */
  v1KodeverkList = (params: RequestParams = {}) =>
    this.request<Record<string, DIPSKodeverkVerdi[]>, void>({
      path: `/api/v1/Kodeverk`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PatientInformation
   * @name V1PatientInformationList
   * @summary Get patients that matches a search term, either last name or national identity number
   * @request GET:/api/v1/PatientInformation
   * @secure
   */
  v1PatientInformationList = (
    query: {
      /** @minLength 3 */
      QueryString: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PatientInformation[], void>({
      path: `/api/v1/PatientInformation`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PatientInformation
   * @name V1PatientInformationPatientProxyIdDetail
   * @request GET:/api/v1/PatientInformation/PatientProxyId/{patientId}
   * @secure
   */
  v1PatientInformationPatientProxyIdDetail = (patientId: number, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/v1/PatientInformation/PatientProxyId/${patientId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RettsligGrunnlag
   * @name V1RettsliggrunnlagCreate
   * @summary Create new rettsliggrunnlag
   * @request POST:/api/v1/{patientId}/rettsliggrunnlag
   * @secure
   */
  v1RettsliggrunnlagCreate = (
    patientId: string,
    data:
      | RettsligGrunnlag102
      | RettsligGrunnlag103
      | RettsligGrunnlag104
      | RettsligGrunnlag21
      | RettsligGrunnlag22
      | RettsligGrunnlag32
      | RettsligGrunnlag33
      | RettsligGrunnlag35
      | RettsligGrunnlag41
      | RettsligGrunnlagAnnetRettsligGrunnlag
      | RettsligGrunnlagAvsluttAnnetRettsligGrunnlag
      | RettsligGrunnlagAvsluttDomPaaOverforingTilTPH
      | RettsligGrunnlagAvsluttDomPaaTvungenOmsorg
      | RettsligGrunnlagAvsluttTilbakeholdelse24Timer
      | RettsligGrunnlagAvslutt102
      | RettsligGrunnlagAvslutt103
      | RettsligGrunnlagAvslutt104
      | RettsligGrunnlagAvslutt21
      | RettsligGrunnlagAvslutt22
      | RettsligGrunnlagAvslutt35
      | RettsligGrunnlagAvslutt37TO
      | RettsligGrunnlagAvslutt37TPH
      | RettsligGrunnlagAvslutt41
      | RettsligGrunnlagDomPaaOverforingTilTPH
      | RettsligGrunnlagDomPaaTvungenOmsorg
      | RettsligGrunnlagKontrollUndersokelse
      | RettsligGrunnlagOpprettetVedAnnenInstitusjon
      | RettsligGrunnlagOverfoertFraAnnetForetak
      | RettsligGrunnlagOverforingAvDomfeltMellomTvangsformer
      | RettsligGrunnlagOverforingAvDomfeltTilAnnenInstitusjon
      | RettsligGrunnlagOverforingAv32TilAnnenInstitusjon
      | RettsligGrunnlagOverforingMellomTvangsformer
      | RettsligGrunnlagOverforingTilAnnenInstitusjon
      | RettsligGrunnlagSamtykkeForlengelseTO
      | RettsligGrunnlagSamtykkeForlengelseTPH
      | RettsligGrunnlagTilbakeholdelse24Timer
      | RettsligGrunnlagToTphIkkeEtableres,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v1/${patientId}/rettsliggrunnlag`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags RettsligGrunnlag
   * @name V1RettsliggrunnlagDetail
   * @summary Get rettslig grunnlag list
   * @request GET:/api/v1/{patientId}/rettsliggrunnlag
   * @secure
   */
  v1RettsliggrunnlagDetail = (
    patientId: string,
    query?: {
      /** @format int64 */
      ContactId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IRettsligGrunnlag[], void>({
      path: `/api/v1/${patientId}/rettsliggrunnlag`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RettsligGrunnlag
   * @name V1RettsliggrunnlagDetail2
   * @summary Get rettslig grunnlag by Id
   * @request GET:/api/v1/{patientId}/rettsliggrunnlag/{id}
   * @originalName v1RettsliggrunnlagDetail
   * @duplicate
   * @secure
   */
  v1RettsliggrunnlagDetail2 = (patientId: string, id: string, params: RequestParams = {}) =>
    this.request<
      | RettsligGrunnlag102
      | RettsligGrunnlag103
      | RettsligGrunnlag104
      | RettsligGrunnlag21
      | RettsligGrunnlag22
      | RettsligGrunnlag32
      | RettsligGrunnlag33
      | RettsligGrunnlag35
      | RettsligGrunnlag41
      | RettsligGrunnlagAnnetRettsligGrunnlag
      | RettsligGrunnlagAvsluttAnnetRettsligGrunnlag
      | RettsligGrunnlagAvsluttDomPaaOverforingTilTPH
      | RettsligGrunnlagAvsluttDomPaaTvungenOmsorg
      | RettsligGrunnlagAvsluttTilbakeholdelse24Timer
      | RettsligGrunnlagAvslutt102
      | RettsligGrunnlagAvslutt103
      | RettsligGrunnlagAvslutt104
      | RettsligGrunnlagAvslutt21
      | RettsligGrunnlagAvslutt22
      | RettsligGrunnlagAvslutt35
      | RettsligGrunnlagAvslutt37TO
      | RettsligGrunnlagAvslutt37TPH
      | RettsligGrunnlagAvslutt41
      | RettsligGrunnlagDomPaaOverforingTilTPH
      | RettsligGrunnlagDomPaaTvungenOmsorg
      | RettsligGrunnlagKontrollUndersokelse
      | RettsligGrunnlagOpprettetVedAnnenInstitusjon
      | RettsligGrunnlagOverfoertFraAnnetForetak
      | RettsligGrunnlagOverforingAvDomfeltMellomTvangsformer
      | RettsligGrunnlagOverforingAvDomfeltTilAnnenInstitusjon
      | RettsligGrunnlagOverforingAv32TilAnnenInstitusjon
      | RettsligGrunnlagOverforingMellomTvangsformer
      | RettsligGrunnlagOverforingTilAnnenInstitusjon
      | RettsligGrunnlagSamtykkeForlengelseTO
      | RettsligGrunnlagSamtykkeForlengelseTPH
      | RettsligGrunnlagTilbakeholdelse24Timer
      | RettsligGrunnlagToTphIkkeEtableres,
      void
    >({
      path: `/api/v1/${patientId}/rettsliggrunnlag/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RettsligGrunnlag
   * @name V1RettsliggrunnlagPartialUpdate
   * @summary Update rettslig grunnlag
   * @request PATCH:/api/v1/{patientId}/rettsliggrunnlag/{id}
   * @secure
   */
  v1RettsliggrunnlagPartialUpdate = (
    patientId: string,
    id: string,
    data: (Operation | Operation1)[],
    params: RequestParams = {},
  ) =>
    this.request<PatchLog, void>({
      path: `/api/v1/${patientId}/rettsliggrunnlag/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RettsligGrunnlag
   * @name OptionsApi
   * @request OPTIONS:/api/v1/{patientId}/rettsliggrunnlag/{id}
   * @secure
   */
  optionsApi = (patientId: string, id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/${patientId}/rettsliggrunnlag/${id}`,
      method: "OPTIONS",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tvangsprotokoll
   * @name V1TvangsprotokollDetail
   * @summary Get a list of tvangsprotokoll elements by vedtak id
   * @request GET:/api/v1/{patientId}/tvangsprotokoll
   * @secure
   */
  v1TvangsprotokollDetail = (
    patientId: string,
    query?: {
      /** @format uuid */
      VedtakId?: string;
      /** @format int32 */
      Take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Gjennomforing43 | Gjennomforing44 | Gjennomforing48, void>({
      path: `/api/v1/${patientId}/tvangsprotokoll`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tvangsprotokoll
   * @name V1TvangsprotokollCreate
   * @summary Create new tvangsprotokoll
   * @request POST:/api/v1/{patientId}/tvangsprotokoll
   * @secure
   */
  v1TvangsprotokollCreate = (
    patientId: string,
    data: Gjennomforing43 | Gjennomforing44 | Gjennomforing48,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v1/${patientId}/tvangsprotokoll`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tvangsprotokoll
   * @name V1TvangsprotokollDetail2
   * @summary Get a tvangsprotokoll by id
   * @request GET:/api/v1/{patientId}/tvangsprotokoll/{id}
   * @originalName v1TvangsprotokollDetail
   * @duplicate
   * @secure
   */
  v1TvangsprotokollDetail2 = (patientId: string, id: string, params: RequestParams = {}) =>
    this.request<Gjennomforing43 | Gjennomforing44 | Gjennomforing48, void>({
      path: `/api/v1/${patientId}/tvangsprotokoll/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserSettings
   * @name V1UsersettingsUpdate
   * @summary Update User Filters
   * @request PUT:/api/v1/usersettings
   * @secure
   */
  v1UsersettingsUpdate = (data: UserSettings, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/usersettings`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags UserSettings
   * @name V1UsersettingsList
   * @summary Get User Filters
   * @request GET:/api/v1/usersettings
   * @secure
   */
  v1UsersettingsList = (params: RequestParams = {}) =>
    this.request<UserSettings, void>({
      path: `/api/v1/usersettings`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vedtak
   * @name V1VedtakCreate
   * @summary Create Vedtak
   * @request POST:/api/v1/{patientId}/vedtak
   * @secure
   */
  v1VedtakCreate = (
    patientId: string,
    data:
      | Vedtak4A
      | Vedtak43
      | Vedtak44
      | Vedtak45Innskrenket
      | Vedtak45Post
      | Vedtak46
      | Vedtak47
      | Vedtak47A
      | Vedtak48
      | Vedtak48A
      | Vedtak48B
      | Vedtak48C
      | Vedtak48D
      | Vedtak48HastevedtakFagligAnsvarlig
      | VedtakAvslutt4A6
      | VedtakAvslutt4ANattelaasing
      | VedtakAvslutt44
      | VedtakAvslutt43
      | VedtakAvslutt45Innskrenket
      | VedtakAvslutt45Post
      | VedtakAvslutt6
      | VedtakAvslutt7
      | VedtakECT
      | VedtakHolding
      | VedtakRus,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v1/${patientId}/vedtak`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Vedtak
   * @name V1VedtakDetail
   * @summary Get list of vedtak
   * @request GET:/api/v1/{patientId}/vedtak
   * @secure
   */
  v1VedtakDetail = (
    patientId: string,
    query?: {
      /** @format uuid */
      RettsligGrunnlagId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      (
        | Vedtak4A
        | Vedtak43
        | Vedtak44
        | Vedtak45Innskrenket
        | Vedtak45Post
        | Vedtak46
        | Vedtak47
        | Vedtak47A
        | Vedtak48
        | Vedtak48A
        | Vedtak48B
        | Vedtak48C
        | Vedtak48D
        | Vedtak48HastevedtakFagligAnsvarlig
        | VedtakAvslutt4A6
        | VedtakAvslutt4ANattelaasing
        | VedtakAvslutt44
        | VedtakAvslutt43
        | VedtakAvslutt45Innskrenket
        | VedtakAvslutt45Post
        | VedtakAvslutt6
        | VedtakAvslutt7
        | VedtakECT
        | VedtakHolding
        | VedtakRus
      )[],
      void
    >({
      path: `/api/v1/${patientId}/vedtak`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vedtak
   * @name V1VedtakDetail2
   * @summary Get vedtak by id
   * @request GET:/api/v1/{patientId}/vedtak/{id}
   * @originalName v1VedtakDetail
   * @duplicate
   * @secure
   */
  v1VedtakDetail2 = (patientId: string, id: string, params: RequestParams = {}) =>
    this.request<
      | Vedtak4A
      | Vedtak43
      | Vedtak44
      | Vedtak45Innskrenket
      | Vedtak45Post
      | Vedtak46
      | Vedtak47
      | Vedtak47A
      | Vedtak48
      | Vedtak48A
      | Vedtak48B
      | Vedtak48C
      | Vedtak48D
      | Vedtak48HastevedtakFagligAnsvarlig
      | VedtakAvslutt4A6
      | VedtakAvslutt4ANattelaasing
      | VedtakAvslutt44
      | VedtakAvslutt43
      | VedtakAvslutt45Innskrenket
      | VedtakAvslutt45Post
      | VedtakAvslutt6
      | VedtakAvslutt7
      | VedtakECT
      | VedtakHolding
      | VedtakRus,
      void
    >({
      path: `/api/v1/${patientId}/vedtak/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vedtak
   * @name V1VedtakPartialUpdate
   * @summary Update vedtak
   * @request PATCH:/api/v1/{patientId}/vedtak/{id}
   * @secure
   */
  v1VedtakPartialUpdate = (
    patientId: string,
    id: string,
    data: (Operation | Operation1)[],
    params: RequestParams = {},
  ) =>
    this.request<PatchLog, void>({
      path: `/api/v1/${patientId}/vedtak/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
