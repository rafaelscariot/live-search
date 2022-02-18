import SearchResultsInterface from "./SearchResults.interface";

interface LiveSearchServerServiceInterface {
  searchResults(term: string): SearchResultsInterface | Error;
  getSuggestions(term: string, section?: string): any;
}

export default LiveSearchServerServiceInterface;
