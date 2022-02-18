import HighlightsInterface from "./Highlights.interface";

interface SearchResultsInterface {
  highlights: HighlightsInterface[];
  suggestions: string[];
}

export default SearchResultsInterface;
