import Results from "../resources/database";
import { termFormatter } from "../utils/Utils";
import LiveSearchServerServiceInterface from "../interfaces/LiveSearchService.interface";
import SearchResultsInterface from "../interfaces/SearchResults.interface";
import LiveSearchServiceErrorsEnum from "../utils/enums/LiveSearchServiceErrors.enum";

const LiveSearchServerService: LiveSearchServerServiceInterface = {
  searchResults(term: string): SearchResultsInterface | Error {
    if (!term)
      return new Error(LiveSearchServiceErrorsEnum.INVALID_QUERY_PARAM);

    let originalTitle;
    term = termFormatter(term);

    let result: any = {};

    /* checking for a highlight match */
    Results.highlights.map((el) => {
      const formatedQueries = el.queries.map((el) => termFormatter(el));

      formatedQueries.map((querie) => {
        if (querie.includes(term)) {
          originalTitle = el.title;

          result = {
            highlight: {
              title: termFormatter(el.title),
              url: el.url,
              logo: el.logo,
            },
          };
        }
      });
    });

    /* getting the suggestions matchs */
    result["suggestions"] = this.getSuggestions(term, result.highlight?.title);

    /* returning the section title formated */
    if (result.highlight) {
      result.highlight.title = originalTitle;
    }

    return result;
  },

  getSuggestions(term: string, section: string) {
    let suggestionsMatch: any = [];

    Results.suggestions.map((globoSuggestion) => {
      if (
        termFormatter(globoSuggestion).includes(term) ||
        termFormatter(globoSuggestion).includes(section)
      ) {
        suggestionsMatch.push(globoSuggestion);
      }
    });

    return suggestionsMatch;
  },
};

export default LiveSearchServerService;
