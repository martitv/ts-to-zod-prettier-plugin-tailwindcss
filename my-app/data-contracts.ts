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

export interface Address {
  town?: string | null;
  zipCode?: string | null;
  streetAddress?: string | null;
  /** @format int64 */
  zipCodeId?: number | null;
}

export interface Ansvarlig {
  /** @format uuid */
  id?: string | null;
  /** @format uuid */
  vedtaksId?: string;
  stilling?: VolvenKodeverkValue8441;
  hastevedtakStilling?: string | null;
  /** @format int64 */
  dipsRekvirentId?: number | null;
  stillingFriT?: string | null;
  ansvarligFriT?: string | null;
}

export interface ContactDTO {
  /** @format int64 */
  patientId?: number | null;
  /** @format int64 */
  contactId?: number | null;
  /** @format int64 */
  episodeOfCareId?: number | null;
  isScheduledContact?: boolean | null;
  /** @format int32 */
  tentativity?: number | null;
  /** @format date-time */
  checkinTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
  /** @format int32 */
  scheduledContactTypeId?: number | null;
  /** @format int32 */
  contactType?: number | null;
  reason?: string | null;
  /** @format int64 */
  levelOfCare?: number | null;
  scheduledContactName?: string | null;
  coordinationComment?: string | null;
  /** @format int64 */
  periodOfCareId?: number | null;
  /** @format date-time */
  periodOfCareStartDateTime?: string | null;
  periodOfCareClinicalProblem?: string | null;
  noShow?: boolean | null;
  /** @format int64 */
  departmentId?: number | null;
  departmentName?: string | null;
  departmentShortName?: string | null;
  /** @format int64 */
  departmentTypeId?: number | null;
  /** @format int64 */
  locationId?: number | null;
  locationName?: string | null;
  locationShortName?: string | null;
  /** @format int64 */
  wardId?: number | null;
  wardName?: string | null;
  wardShortName?: string | null;
  /** @format int64 */
  sectionId?: number | null;
  sectionName?: string | null;
  sectionShortName?: string | null;
  referralIsPrimary?: boolean | null;
  externalInfoRestricted?: boolean | null;
  responsibleDoctor?: string | null;
}

export interface DIPSKodeverkVerdi {
  /** @format int64 */
  kodeId?: number;
  /** @format int64 */
  kodeListeId?: number;
  volvenKode?: string | null;
  volvenKortNavn?: string | null;
  volvenLangtNavn?: string | null;
}

export type Gjennomforing43 = Tvangsprotokoll;

export type Gjennomforing44 = Tvangsprotokoll & {
  administrertLegemiddel?: string | null;
  administrertDose?: string | null;
  administrasjonsform?: string | null;
};

export type Gjennomforing48 = Tvangsprotokoll & {
  endringUnderGjForing?: VolvenKodeverkValue9272;
  beskrivelseAvGjForing?: string | null;
  /** @format date-time */
  endretTidspunkt?: string | null;
};

export interface IRettsligGrunnlag {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  opprettetDato?: string;
  /** @format uuid */
  helsevernDelperiodeId?: string | null;
  /** @format int32 */
  visitId?: number | null;
  helsetjenesteenhet?: string | null;
  medEllerUtenDognOpphold?: VolvenKodeverkValue9312;
  feilregistrert?: boolean | null;
  hjemmel?: VolvenKodeverkValue9300;
  /** @format date-time */
  etablertDato?: string | null;
  /** @format date-time */
  gyldigTil?: string | null;
  statusRettsligGrunnlag?: VolvenKodeverkValue9298;
  /** @format uuid */
  pasientId?: string;
  vedtakType?: VolvenKodeverkValue9275;
  ansvarlig?: Ansvarlig;
  informasjonTilParorende?: VolvenKodeverkValue9257;
  pasientHarUttaltOgMener?: string | null;
  /** @format int32 */
  version?: number | null;
  /** @format uuid */
  patchLogId?: string | null;
}

export type Operation = OperationBase & {
  value?: any;
};

export interface OperationBase {
  operationType?: OperationType;
  path?: string | null;
  op?: string | null;
  from?: string | null;
}

/** @format int32 */
export enum OperationType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export type Operation1 = Operation;

export interface PatchLog {
  /** @format uuid */
  id?: string;
  jsonPatch?: string | null;
  /** @format int32 */
  version?: number | null;
  /** @format uuid */
  changedBy?: string | null;
  /** @format date-time */
  changedAt?: string | null;
}

export interface PatientInformation {
  /** @format int64 */
  nationalityId?: number | null;
  id?: string | null;
  firstname?: string | null;
  lastName?: string | null;
  nationalIdentityNumber?: string | null;
  /** @format date-time */
  dateOfBirth?: string | null;
  /** @format int32 */
  gender?: number | null;
  /** @format int64 */
  nationalIdentityNumberType?: number | null;
  address?: Address;
  isDead?: boolean | null;
  isPatient?: boolean | null;
  isHistorical?: boolean | null;
  /** @format int64 */
  personId?: number | null;
  /** @format int64 */
  municipalityId?: number | null;
}

export interface ResponseRequisitionerDTO {
  /** @format int64 */
  healthCareProfessionalId?: number | null;
  name?: string | null;
  code?: string | null;
  canFinallyApprove?: boolean | null;
  /** @format int64 */
  hospitalId?: number | null;
  departmentName?: string | null;
  departmentShortName?: string | null;
  role?: string | null;
}

export interface RettsligGrunnlag {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  opprettetDato?: string;
  /** @format uuid */
  helsevernDelperiodeId?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  visitId: number;
  medEllerUtenDognOpphold?: VolvenKodeverkValue9312;
  /** @format date-time */
  gyldigTil?: string | null;
  /** @format uuid */
  pasientId: string;
  pasientHarUttaltOgMener?: string | null;
  informasjonTilParorende?: VolvenKodeverkValue9257;
  helsetjenesteenhet?: string | null;
  ansvarlig?: Ansvarlig;
  /** @format date-time */
  vedtakFattetDato?: string | null;
  feilregistrert?: boolean | null;
  hjemmel: VolvenKodeverkValue9300;
  /** @format date-time */
  etablertDato?: string | null;
  statusRettsligGrunnlag?: VolvenKodeverkValue9298;
  merknad?: string | null;
  vedtakType?: VolvenKodeverkValue9275;
  /** @format int32 */
  version?: number | null;
  /** @format uuid */
  patchLogId?: string | null;
  isDraft?: boolean;
}

export type RettsligGrunnlag102 = RettsligGrunnlag;

export type RettsligGrunnlag103 = RettsligGrunnlag;

export type RettsligGrunnlag104 = RettsligGrunnlag;

export type RettsligGrunnlag21 = RettsligGrunnlag;

export type RettsligGrunnlag22 = RettsligGrunnlag;

export type RettsligGrunnlag32 = RettsligGrunnlag & {
  /** @format date-time */
  pasAnkomTilInstitusjon?: string | null;
  hjemmelTO?: VolvenKodeverkValue9276;
  unntakFraKonvForbudet?: boolean | null;
  begrUnntakKonvForbudet?: string | null;
  omNearmPaarorUttalelser?: VolvenKodeverkValue9311;
  nearmPaarorenUttalelser?: string | null;
  detErFremsattBegjearing?: boolean | null;
  /** @format date-time */
  begjearingMottattDato?: string | null;
  begjearingFremsattAv?: VolvenKodeverkValue9290;
  fremBegjearAnlUttaleSeg?: boolean | null;
  uttalelseBegjearInstans?: string | null;
  vurderingAvFrivillighet?: VolvenKodeverkValue9279[] | null;
  friviElFormaalslostBegr?: string | null;
  /** @format date-time */
  eksternLegeUndDato?: string | null;
  /** @format int64 */
  eksternLegeUndUtfortAv?: number | null;
  ekstLegeUndUtfortAvFriT?: string | null;
  eksternLegeUndPgaVedtak?: boolean | null;
  /** @format date-time */
  internLegeundersokelseDato?: string | null;
  /** @format int64 */
  internLegeUndUtfortAv?: number | null;
  vurdAlvSinnlidErOppfylt?: string | null;
  vilkaarSomVurdOppfylt?: VolvenKodeverkValue9280[] | null;
  tilleggsVilkaarBegrunn?: string | null;
  vurdPasSamKompetanse?: VolvenKodeverkValue9313;
  samtykkeKompetanseBegr?: string | null;
  instFagMatrEgnetForPas?: boolean | null;
  begrTOSomBesLosnForPas?: string | null;
  fremBegjErInfoKlageadg?: boolean | null;
};

export type RettsligGrunnlag33 = RettsligGrunnlag & {
  nesteKontrollundersokelse?: string | null;
  /** @format date-time */
  fristNesteKontrollundersokelse?: string | null;
  /** @format date-time */
  pasAnkomTilInstitusjon?: string | null;
  /** @format date-time */
  oppstartsDatoTO?: string | null;
  hjemmelTPH?: VolvenKodeverkValue9277;
  unntakFraKonvForbudet?: boolean | null;
  begrUnntakKonvForbudet?: string | null;
  omNearmPaarorUttalelser?: VolvenKodeverkValue9311;
  nearmPaarorenUttalelser?: string | null;
  detErFremsattBegjearing?: boolean | null;
  /** @format date-time */
  begjearingMottattDato?: string | null;
  begjearingFremsattAv?: VolvenKodeverkValue9290;
  fremBegjearAnlUttaleSeg?: boolean | null;
  uttalelseBegjearInstans?: string | null;
  vurderingAvFrivillighet?: VolvenKodeverkValue9279[] | null;
  friviElFormaalslostBegr?: string | null;
  /** @format date-time */
  eksternLegeUndDato?: string | null;
  /** @format int64 */
  eksternLegeUndUtfortAv?: number | null;
  ekstLegeUndUtfortAvFriT?: string | null;
  eksternLegeUndPgaVedtak?: boolean | null;
  /** @format date-time */
  internLegeUndDato?: string | null;
  /** @format int64 */
  internLegeUndUtfortAv?: number | null;
  vurdAlvSinnlidErOppfylt?: string | null;
  vilkaarSomVurdOppfylt?: VolvenKodeverkValue9280[] | null;
  tilleggsVilkaarBegrunn?: string | null;
  vurdPasSamKompetanse?: VolvenKodeverkValue9313;
  samtykkeKompetanseBegr?: string | null;
  instFagMatrEgnetForPas?: boolean | null;
  begrTPHSomBesLosnForPas?: string | null;
  fremBegjErInfoKlageadg?: boolean | null;
};

export type RettsligGrunnlag35 = RettsligGrunnlag;

export type RettsligGrunnlag41 = RettsligGrunnlag;

export type RettsligGrunnlagAnnetRettsligGrunnlag = RettsligGrunnlag & {
  annenLovhjemmel?: string | null;
};

export type RettsligGrunnlagAvsluttAnnetRettsligGrunnlag = RettsligGrunnlag & {
  annenLovhjemmel?: string | null;
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
  /** @format date-time */
  tidspktOpphorAvAnnetRG?: string | null;
};

export type RettsligGrunnlagAvsluttDomPaaOverforingTilTPH = RettsligGrunnlag & {
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
  /** @format date-time */
  tidspunktOpphorAvDomTPH?: string | null;
};

export type RettsligGrunnlagAvsluttDomPaaTvungenOmsorg = RettsligGrunnlag & {
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
  /** @format date-time */
  tidspunktOpphorAvDomTO?: string | null;
};

export type RettsligGrunnlagAvsluttTilbakeholdelse24Timer = RettsligGrunnlag & {
  /** @format date-time */
  tidspktForOpphorAvTbh24?: string | null;
};

export type RettsligGrunnlagAvslutt102 = RettsligGrunnlag & {
  /** @format date-time */
  tidspktOpphorAv_10_2?: string | null;
};

export type RettsligGrunnlagAvslutt103 = RettsligGrunnlag & {
  /** @format date-time */
  tidspktOpphorAv_10_3?: string | null;
};

export type RettsligGrunnlagAvslutt104 = RettsligGrunnlag & {
  /** @format date-time */
  tidspktOpphorAv_10_4?: string | null;
};

export type RettsligGrunnlagAvslutt21 = RettsligGrunnlag & {
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
  /** @format date-time */
  tidspktOpphorAv_2_1?: string | null;
};

export type RettsligGrunnlagAvslutt22 = RettsligGrunnlag & {
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
  /** @format date-time */
  tidspktOpphorAv_2_2?: string | null;
};

export type RettsligGrunnlagAvslutt35 = RettsligGrunnlag & {
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
  /** @format date-time */
  tidspktOpphorAv_3_5?: string | null;
};

export type RettsligGrunnlagAvslutt37TO = RettsligGrunnlag & {
  /** @format date-time */
  toOpprinneligVedtatt?: string | null;
  omNearmPaarorUttalelser?: VolvenKodeverkValue9311;
  nearmPaarorenUttalelser?: string | null;
  detErFremsattBegjearing?: boolean | null;
  fremBegjearAnlUttaleSeg?: boolean | null;
  uttalelseBegjearInstans?: string | null;
  bgrVilkaarTOIkkeOppfylt?: string | null;
  fremBegjErInfoKlageadg?: boolean | null;
  paaklagUtsattIverksett?: boolean | null;
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
};

export type RettsligGrunnlagAvslutt37TPH = RettsligGrunnlag & {
  /** @format date-time */
  underTphSiden?: string | null;
  omNearmPaarorUttalelser?: VolvenKodeverkValue9311;
  nearmPaarorenUttalelser?: string | null;
  detErFremsattBegjearing?: boolean | null;
  fremBegjearAnlUttaleSeg?: boolean | null;
  uttalelseBegjearInstans?: string | null;
  bgrVilkaarTPHIkkeOppfylt?: string | null;
  fremBegjErInfoKlageadg?: boolean | null;
  paaklagUtsattIverksett?: boolean | null;
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
};

export type RettsligGrunnlagAvslutt41 = RettsligGrunnlag & {
  /** @format date-time */
  tidspktOpphorAv_4_1?: string | null;
};

export type RettsligGrunnlagDomPaaOverforingTilTPH = RettsligGrunnlag;

export type RettsligGrunnlagDomPaaTvungenOmsorg = RettsligGrunnlag;

export type RettsligGrunnlagKontrollUndersokelse = RettsligGrunnlag & {
  /** @format date-time */
  undersokelseUtfort?: string | null;
  kritTPHFortsattTilstede?: string | null;
  fagAnsPersUndPasienten?: boolean | null;
  /** @format date-time */
  startTidspunktTPH?: string | null;
  vurderingAvTPH?: string | null;
  kontrollundersokelse?: string | null;
  nesteKontrollundersokelse?: string | null;
  /** @format date-time */
  fristNesteKontrollundersokelse?: string | null;
};

export type RettsligGrunnlagOpprettetVedAnnenInstitusjon = RettsligGrunnlag & {
  fagligAnsvarligKontaktinformasjon?: string | null;
  /** @format date-time */
  ankommetTidspunkt?: string | null;
  overfortFraEnhet?: string | null;
  nesteKontrollundersokelse?: string | null;
  /** @format date-time */
  fristNesteKontrollundersokelse?: string | null;
};

export type RettsligGrunnlagOverfoertFraAnnetForetak = RettsligGrunnlag & {
  /** @format date-time */
  ankommetTidspunkt?: string | null;
  overfortFraEnhet?: string | null;
  annenLovhjemmel?: string | null;
  /** @format date-time */
  pasPaaOpphldIkkeGdkjTPH?: string | null;
  /** @format date-time */
  pasTilbInstIkkeGdkjTPH?: string | null;
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
};

export type RettsligGrunnlagOverforingAvDomfeltMellomTvangsformer = RettsligGrunnlag & {
  /** @format date-time */
  sisteDomPaaOverforinTPH?: string | null;
  eksisterendeHjemmel?: VolvenKodeverkValue9300;
  nyHjemmel?: VolvenKodeverkValue9277;
  eksisterendeDognStatus?: VolvenKodeverkValue9312;
  dognStatus?: VolvenKodeverkValue9312;
  endringAvTvangsform?: VolvenKodeverkValue9299;
  overforesTilEnhet?: string | null;
  begrunnelse?: string | null;
  medDognTUtenDognBegrunn?: string | null;
  hensynPaarorendeBegrunn?: string | null;
  iverksettelseOverforing?: VolvenKodeverkValue9282;
  begrunnUmiddOverforing?: string | null;
  adgangKlageInnenTreUker?: boolean | null;
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
};

export type RettsligGrunnlagOverforingAvDomfeltTilAnnenInstitusjon = RettsligGrunnlag & {
  /** @format date-time */
  sisteDomPaaOverforinTPH?: string | null;
  eksisterendeHjemmel?: VolvenKodeverkValue9300;
  eksisterendeDognStatus?: VolvenKodeverkValue9312;
  dognStatus?: VolvenKodeverkValue9312;
  endringAvTvangsform?: VolvenKodeverkValue9299;
  overforesTilEnhet?: string | null;
  begrunnelse?: string | null;
  medDognTUtenDognBegrunn?: string | null;
  hensynPaarorendeBegrunn?: string | null;
  iverksettelseOverforing?: VolvenKodeverkValue9282;
  begrunnUmiddOverforing?: string | null;
  adgangKlageInnenTreUker?: boolean | null;
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
};

export type RettsligGrunnlagOverforingAv32TilAnnenInstitusjon = RettsligGrunnlag & {
  /** @format date-time */
  underVedtakSiden?: string | null;
  /** @format date-time */
  vedtaketGjelderTil?: string | null;
  eksisterendeHjemmel?: VolvenKodeverkValue9277;
  overforesTilEnhet?: string | null;
};

export type RettsligGrunnlagOverforingMellomTvangsformer = RettsligGrunnlag & {
  /** @format date-time */
  underTPHSiden?: string | null;
  /** @format date-time */
  vedtakTPHGjelderTil?: string | null;
  eksisterendeHjemmel?: VolvenKodeverkValue9277;
  endringAvTvangsform?: VolvenKodeverkValue9299;
  overforesTilEnhet?: string | null;
  begrunnelse?: string | null;
  medDognTUtenDognBegrunn?: string | null;
  hensynPaarorendeBegrunn?: string | null;
  iverksettelseOverforing?: VolvenKodeverkValue9282;
  begrunnUmiddOverforing?: string | null;
};

export type RettsligGrunnlagOverforingTilAnnenInstitusjon = RettsligGrunnlag & {
  /** @format date-time */
  underTPHSiden?: string | null;
  /** @format date-time */
  vedtakTPHGjelderTil?: string | null;
  nesteKontrollundersokelse?: string | null;
  /** @format date-time */
  fristNesteKontrollundersokelse?: string | null;
  eksisterendeHjemmel?: VolvenKodeverkValue9277;
  endringAvTvangsform?: VolvenKodeverkValue9299;
  overforesTilEnhet?: string | null;
  begrunnelse?: string | null;
  medDognTUtenDognBegrunn?: string | null;
  hensynPaarorendeBegrunn?: string | null;
  iverksettelseOverforing?: VolvenKodeverkValue9282;
  begrunnUmiddOverforing?: string | null;
  vilkaarUtsettelseStraff?: VolvenKodeverkValue9291;
  godskrivGjennomfoStraff?: VolvenKodeverkValue9308;
};

export type RettsligGrunnlagSamtykkeForlengelseTO = RettsligGrunnlag & {
  /** @format date-time */
  foresporselDato?: string | null;
  /** @format date-time */
  forespurtForlengelseTil?: string | null;
  ktrlkommisjonensVedtak?: VolvenKodeverkValue9289;
  /** @format date-time */
  datoKtrlkommisjonen?: string | null;
  /** @format date-time */
  forlengesTilTidspunkt?: string | null;
  /** @format int64 */
  forlengelseNr?: number | null;
};

export type RettsligGrunnlagSamtykkeForlengelseTPH = RettsligGrunnlag & {
  /** @format date-time */
  foresporselDato?: string | null;
  /** @format date-time */
  forespurtForlengelseTil?: string | null;
  ktrlkommisjonensVedtak?: VolvenKodeverkValue9289;
  /** @format date-time */
  datoKtrlkommisjonen?: string | null;
  /** @format date-time */
  forlengesTilTidspunkt?: string | null;
  /** @format int64 */
  forlengelseNr?: number | null;
  nesteKontrollundersokelse?: string | null;
  /** @format date-time */
  fristNesteKontrollundersokelse?: string | null;
};

export type RettsligGrunnlagTilbakeholdelse24Timer = RettsligGrunnlag & {
  /** @format date-time */
  fristForAaFatteVedtak?: string | null;
  /** @format date-time */
  tidspunktForOpphorAvSaken?: string | null;
};

export type RettsligGrunnlagToTphIkkeEtableres = RettsligGrunnlag & {
  /** @format date-time */
  pasAnkomTilInstitusjon?: string | null;
  omNearmPaarorUttalelser?: VolvenKodeverkValue9311;
  nearmPaarorenUttalelser?: string | null;
  detErFremsattBegjearing?: boolean | null;
  /** @format date-time */
  begjearingMottattDato?: string | null;
  begjearingFremsattAv?: VolvenKodeverkValue9290;
  fremBegjearAnlUttaleSeg?: boolean | null;
  uttalelseBegjearInstans?: string | null;
  pasVeartUndEksternLege?: boolean | null;
  /** @format date-time */
  eksternLegeUndDato?: string | null;
  /** @format int64 */
  eksternLegeUndUtfortAv?: number | null;
  ekstLegeUndUtfortAvFriT?: string | null;
  eksternLegeUndPgaVedtak?: boolean | null;
  /** @format date-time */
  internLegeUndDato?: string | null;
  /** @format int64 */
  internLegeUndUtfortAv?: number | null;
  begrVilkTOTPHIkkeOpfylt?: string | null;
  fremBegjErInfoKlageadg?: boolean | null;
};

export interface Tvangsprotokoll {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  vedtakId?: string;
  /** @format uuid */
  pasientId?: string;
  fagligAnsvarlig?: Ansvarlig;
  /** @format date-time */
  startTidspunkt?: string | null;
  /** @format date-time */
  avsluttetTidspunkt?: string | null;
  merknad?: string | null;
  /** @format int32 */
  lopenummer?: number | null;
}

export interface UserSettings {
  aktiveFiltre?: Record<string, string>;
}

export interface Vedtak {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  rettsligGrunnlagId: string;
  /** @format int64 */
  kontaktId: number;
  /** @format uuid */
  pasientId: string;
  pasientHarUttaltOgMener?: string | null;
  informasjonTilParorende?: VolvenKodeverkValue9257;
  helsetjenesteenhet?: string | null;
  /** @format date-time */
  vedtakFattetDato?: string | null;
  /** @format date-time */
  avsluttesInnen?: string | null;
  vedtakType?: VolvenKodeverkValue9275;
  begrunnelseForVedtak?: string | null;
  fagligAnsvarlig?: Ansvarlig;
  fagligAnsvarligFraAnnetForetak?: Ansvarlig;
  /** @format int32 */
  version?: number | null;
  /** @format uuid */
  patchLogId?: string | null;
}

export type Vedtak4A = Vedtak & {
  pasInfoKlageFristInsta?: boolean | null;
  /** @format date-time */
  tiltakSenestAvsluttes?: string | null;
  kroppUndHvrdanGjennomf?: VolvenKodeverkValue9304[] | null;
  beskrivelseAnnetTiltak?: string | null;
  kroppUndBegrunnVedtak?: VolvenKodeverkValue9303[] | null;
  tillatelseLaaseDorPas?: boolean | null;
  begrunnNattelaasPasRom?: VolvenKodeverkValue9307[] | null;
  pasTilsynRomNattelaast?: boolean | null;
  hvordanUndGjennomfores?: VolvenKodeverkValue9302[] | null;
  undBegrunnelseVedtaket?: VolvenKodeverkValue9301[] | null;
  innskrenVedtakOmfatter?: VolvenKodeverkValue9306[] | null;
  begrunnInnskrenForbind?: VolvenKodeverkValue9305[] | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak43 = Vedtak & {
  opplysningerOmInnhold?: string | null;
  utlosendeArsak?: VolvenKodeverkValue9255[] | null;
  begrunnelseSkjerming?: VolvenKodeverkValue9254[] | null;
  /** @format date-time */
  iverksattDato?: string | null;
  /** @format int64 */
  lopeNummer?: number | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak44 = Vedtak & {
  vurdPasSamKompetanse?: VolvenKodeverkValue9313;
  samKompBegrunnelse?: string | null;
  omManglendeSamtykke?: VolvenKodeverkValue9261;
  ikkeSamKompBegrunnelse?: string | null;
  /** @format int64 */
  navnAnnetHelsepersSok?: number | null;
  navnAnnetHelsepersFriT?: string | null;
  stillingAnnetHelsepers?: string | null;
  oppfatAnnetHelsepers?: string | null;
  merknad?: string | null;
  /** @format int64 */
  lopeNummer?: number | null;
  pasientenErUnderTph?: boolean | null;
  beskrivAnnenBehandForm?: string | null;
  begrunnIkkeAlvInngrep?: string | null;
  behandFormVedtOmfatter?: VolvenKodeverkValue9271;
  begrunnTvangbehandling?: VolvenKodeverkValue9260[] | null;
  virkeMidlerBehandling?: string | null;
  pasUnderFagAnsv48Timer?: boolean | null;
  begrForBrukAvTvang?: VolvenKodeverkValue9262;
  forventedeBivirkinger?: string | null;
  forventetBehandlingsEffekt?: string | null;
  typeDosLegemiErnearing?: string | null;
  hvorforIkkeTabletter?: string | null;
  tvangBehandPaavirkePas?: string | null;
  evalTidligereVedtak?: string | null;
  evalEffektBivirkning?: string | null;
  legeundForetattVedtak?: boolean | null;
  /** @format int64 */
  legeundGjennomfortAv?: number | null;
  forutOppstartLegemiddel?: VolvenKodeverkValue9263;
  forutOppstartErnearing?: VolvenKodeverkValue9264;
  dognOpphIkkeGodkjntTPH?: boolean | null;
  /** @format date-time */
  datoPlanOppstartTvangBeh?: string | null;
  /** @format date-time */
  vedtakGyldigTil?: string | null;
  vedtakOpprinnOpprettet?: string | null;
  /** @format date-time */
  vedtakFattetOpprinnInst?: string | null;
  /** @format date-time */
  tidAnkomstNaavearInst?: string | null;
  fagAnsvarligKontaktInfo?: string | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak45Innskrenket = Vedtak & {
  pasientInfoOmKlage?: boolean | null;
  /** @format date-time */
  vedtakGjelderFraOgMed?: string | null;
  innskrenkningenOmfatter?: VolvenKodeverkValue9283[] | null;
  begrunnInnskrForbOmverd?: VolvenKodeverkValue9284[] | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak45Post = Vedtak & {
  pasientInfoOmKlage?: boolean | null;
  begrunnelsePostkontroll?: VolvenKodeverkValue9285[] | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak46 = Vedtak & {
  pasientInfoOmKlage?: boolean | null;
  begrunnelseForPostkontroll?: VolvenKodeverkValue9285[] | null;
  vedtakOmfatter?: VolvenKodeverkValue9286[] | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak47 = Vedtak & {
  pasientInfoOmKlage?: boolean | null;
  typeBeslaglagtGjenstand?: VolvenKodeverkValue9287[] | null;
  behandlingAvBeslag?: VolvenKodeverkValue9288;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak47A = Vedtak & {
  pasientInfoOmKlage?: boolean | null;
  betegnelseBioMateriale?: string | null;
  mistankeRusMidBehForlop?: boolean | null;
  nodvenProveBioMateriale?: boolean | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak48 = Vedtak & {
  begrunnTvangsmidVedtak?: VolvenKodeverkValue9258[] | null;
  opplysLempMidForgjeves?: string | null;
  /** @format date-time */
  tidFagAnsInfoHstVedtak?: string | null;
  /** @format date-time */
  tidForIverksetting?: string | null;
  /** @format date-time */
  tiltakSenestAvsluttes?: string | null;
  hastevedtakAnsvarlig?: Ansvarlig;
  merknad?: string | null;
  /** @format int64 */
  lopeNummer?: number | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak48HastevedtakFagligAnsvarlig = Vedtak & {
  hasteVedtakAnsvarlig?: Ansvarlig;
  begrunnTvangsmidVedtak?: VolvenKodeverkValue9258[] | null;
  opplysLempMidForgjeves?: string | null;
  /** @format date-time */
  tidFagAnsInfoHstVedtak?: string | null;
  /** @format date-time */
  tidForIverksetting?: string | null;
  hastevedtakAnsvarlig?: Ansvarlig;
  merknad?: string | null;
  /** @format int64 */
  lopeNummer?: number | null;
  fagligAnsStandpunkt?: string | null;
  faBesluttOppretthold?: string | null;
  /** @format date-time */
  tidpktHastVedtakNedtegn?: string | null;
  infoRGHjemmel?: string | null;
  infoRGHelsetjensteenhet?: string | null;
  infoRGDognStatus?: VolvenKodeverkValue9312;
  /** @format date-time */
  infoRGEtablertDato?: string | null;
};

export type Vedtak48A = Vedtak & {
  /** @format int64 */
  lopeNummer?: number | null;
  /** @format date-time */
  tidForIverksetting?: string | null;
  begrunnTvangsmidVedtak?: VolvenKodeverkValue9258[] | null;
  opplysLempMidForgjeves?: string | null;
};

export type Vedtak48B = Vedtak & {
  /** @format int64 */
  lopeNummer?: number | null;
  /** @format date-time */
  tidForIverksetting?: string | null;
  begrunnTvangsmidVedtak?: VolvenKodeverkValue9258[] | null;
  opplysLempMidForgjeves?: string | null;
};

export type Vedtak48C = Vedtak & {
  /** @format int64 */
  lopeNummer?: number | null;
  /** @format date-time */
  tidForIverksetting?: string | null;
  /** @format date-time */
  tiltakSenestAvsluttes?: string | null;
  begrunnTvangsmidVedtak?: VolvenKodeverkValue9258[] | null;
  opplysLempMidForgjeves?: string | null;
};

export type Vedtak48D = Vedtak & {
  /** @format int64 */
  lopeNummer?: number | null;
  /** @format date-time */
  tidForIverksetting?: string | null;
  /** @format date-time */
  tiltakSenestAvsluttes?: string | null;
  begrunnTvangsmidVedtak?: VolvenKodeverkValue9258[] | null;
  opplysLempMidForgjeves?: string | null;
};

export type VedtakAvslutt43 = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
  /** @format date-time */
  naarVedtaketBleFattet?: string | null;
};

export type VedtakAvslutt44 = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
};

export type VedtakAvslutt45Innskrenket = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
};

export type VedtakAvslutt45Post = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
};

export type VedtakAvslutt4A6 = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
};

export type VedtakAvslutt4ANattelaasing = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
};

export type VedtakAvslutt6 = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
};

export type VedtakAvslutt7 = Vedtak & {
  /** @format date-time */
  tidspunktForOpphor?: string | null;
};

export type VedtakECT = Vedtak & {
  vurdPasSamKompetanse?: VolvenKodeverkValue9316;
  pasientensSynPaaTiltak?: string | null;
  opplysningFraPaarorende?: string | null;
  /** @format int64 */
  navnAnnetHelsepersSok?: number | null;
  navnAnnetHelsepersFriT?: string | null;
  stillingAnnetHelsepers?: string | null;
  annetHelsepersVurdering?: string | null;
  merknad?: string | null;
};

export type VedtakHolding = Vedtak & {
  merknad?: string | null;
  nodvendigBenyttNodrett?: boolean | null;
  /** @format date-time */
  hendelseStartet?: string | null;
  /** @format date-time */
  hendelseAvsluttet?: string | null;
};

export type VedtakRus = Vedtak & {
  merknad?: string | null;
  /** @format date-time */
  vedtakGyldigTil?: string | null;
  typeGjennomforing?: string | null;
};

export interface VolvenKodeverkValue {
  /** @format int32 */
  kodeverkId?: number;
  /** @format int32 */
  dipsKodeListeId?: number;
  /** @format int32 */
  dipsKodeverkVerdiId?: number;
}

export type VolvenKodeverkValue8441 = VolvenKodeverkValue;

export type VolvenKodeverkValue9254 = VolvenKodeverkValue;

export type VolvenKodeverkValue9255 = VolvenKodeverkValue;

export type VolvenKodeverkValue9257 = VolvenKodeverkValue;

export type VolvenKodeverkValue9258 = VolvenKodeverkValue;

export type VolvenKodeverkValue9260 = VolvenKodeverkValue;

export type VolvenKodeverkValue9261 = VolvenKodeverkValue;

export type VolvenKodeverkValue9262 = VolvenKodeverkValue;

export type VolvenKodeverkValue9263 = VolvenKodeverkValue;

export type VolvenKodeverkValue9264 = VolvenKodeverkValue;

export type VolvenKodeverkValue9265 = VolvenKodeverkValue;

export type VolvenKodeverkValue9266 = VolvenKodeverkValue;

export type VolvenKodeverkValue9267 = VolvenKodeverkValue;

export type VolvenKodeverkValue9269 = VolvenKodeverkValue;

export type VolvenKodeverkValue9271 = VolvenKodeverkValue;

export type VolvenKodeverkValue9272 = VolvenKodeverkValue;

export type VolvenKodeverkValue9275 = VolvenKodeverkValue;

export type VolvenKodeverkValue9276 = VolvenKodeverkValue;

export type VolvenKodeverkValue9277 = VolvenKodeverkValue;

export type VolvenKodeverkValue9279 = VolvenKodeverkValue;

export type VolvenKodeverkValue9280 = VolvenKodeverkValue;

export type VolvenKodeverkValue9282 = VolvenKodeverkValue;

export type VolvenKodeverkValue9283 = VolvenKodeverkValue;

export type VolvenKodeverkValue9284 = VolvenKodeverkValue;

export type VolvenKodeverkValue9285 = VolvenKodeverkValue;

export type VolvenKodeverkValue9286 = VolvenKodeverkValue;

export type VolvenKodeverkValue9287 = VolvenKodeverkValue;

export type VolvenKodeverkValue9288 = VolvenKodeverkValue;

export type VolvenKodeverkValue9289 = VolvenKodeverkValue;

export type VolvenKodeverkValue9290 = VolvenKodeverkValue;

export type VolvenKodeverkValue9291 = VolvenKodeverkValue;

export type VolvenKodeverkValue9292 = VolvenKodeverkValue;

export type VolvenKodeverkValue9298 = VolvenKodeverkValue;

export type VolvenKodeverkValue9299 = VolvenKodeverkValue;

export type VolvenKodeverkValue9300 = VolvenKodeverkValue;

export type VolvenKodeverkValue9301 = VolvenKodeverkValue;

export type VolvenKodeverkValue9302 = VolvenKodeverkValue;

export type VolvenKodeverkValue9303 = VolvenKodeverkValue;

export type VolvenKodeverkValue9304 = VolvenKodeverkValue;

export type VolvenKodeverkValue9305 = VolvenKodeverkValue;

export type VolvenKodeverkValue9306 = VolvenKodeverkValue;

export type VolvenKodeverkValue9307 = VolvenKodeverkValue;

export type VolvenKodeverkValue9308 = VolvenKodeverkValue;

export type VolvenKodeverkValue9311 = VolvenKodeverkValue;

export type VolvenKodeverkValue9312 = VolvenKodeverkValue;

export type VolvenKodeverkValue9313 = VolvenKodeverkValue;

export type VolvenKodeverkValue9315 = VolvenKodeverkValue;

export type VolvenKodeverkValue9316 = VolvenKodeverkValue;

export type VolvenKodeverkValue9317 = VolvenKodeverkValue;
