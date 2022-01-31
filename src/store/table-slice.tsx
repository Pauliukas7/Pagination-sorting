import { createSlice } from "@reduxjs/toolkit";

export interface Country {
  name: string;
  region: string;
  area: number;
}
interface tableState {
  countries: Country[];
  filteredCountries: Country[];
  sortedCountries: Country[];
  currentPageCountries: Country[];
  sortByNameAsc: boolean;
  sortByRegionAsc: boolean;
  sortByAreaSizeAsc: boolean;
  currentPage: number;
  indexOfLastRecord: number;
  indexOfFirstRecord: number;
  recordsPerPage: number;
  showingByArea: boolean;
  showingByOceania: boolean;
}

const initialState: tableState = {
  countries: [],
  filteredCountries: [],
  sortedCountries: [],
  currentPageCountries: [],
  sortByNameAsc: true,
  sortByRegionAsc: true,
  sortByAreaSizeAsc: true,
  currentPage: 1,
  indexOfLastRecord: 20,
  indexOfFirstRecord: 0,
  recordsPerPage: 20,
  showingByArea: false,
  showingByOceania: false,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addCountriesToState(state, action) {
      state.countries = action.payload;
      state.filteredCountries = state.countries;
      state.currentPageCountries = state.filteredCountries;
    },
    filterByOceania(state) {
      state.filteredCountries = state.countries.filter(
        (country) => country.region === "Oceania"
      );
      state.currentPageCountries = state.filteredCountries;
      state.currentPage = 1;
      state.showingByOceania = true;
      state.showingByArea = false;
    },
    filterByArea(state) {
      const lithuania = state.countries.find(
        (country) => country.name === "Lithuania"
      );
      state.filteredCountries = state.countries.filter(
        (country) => country.area < lithuania!.area
      );
      state.currentPageCountries = state.filteredCountries;
      state.currentPage = 1;
      state.showingByOceania = false;
      state.showingByArea = true;
    },
    resetFilters(state) {
      state.currentPageCountries = state.countries;
      state.currentPage = 1;
      state.showingByOceania = false;
      state.showingByArea = false;
    },
    sortByName(state) {
      state.sortByNameAsc
        ? state.currentPageCountries.sort((a: Country, b: Country) =>
            b.name.localeCompare(a.name)
          )
        : state.currentPageCountries.sort((a: Country, b: Country) =>
            a.name.localeCompare(b.name)
          );
      state.sortByNameAsc = !state.sortByNameAsc;
    },
    sortByRegion(state) {
      state.sortByRegionAsc
        ? state.currentPageCountries.sort((a: Country, b: Country) =>
            b.region.localeCompare(a.region)
          )
        : state.currentPageCountries.sort((a: Country, b: Country) =>
            a.region.localeCompare(b.region)
          );
      state.sortByRegionAsc = !state.sortByRegionAsc;
    },
    sortByAreaSize(state) {
      state.sortByAreaSizeAsc
        ? state.currentPageCountries.sort(
            (a: Country, b: Country) => b.area - a.area
          )
        : state.currentPageCountries.sort(
            (a: Country, b: Country) => a.area - b.area
          );
      state.sortByAreaSizeAsc = !state.sortByAreaSizeAsc;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;
