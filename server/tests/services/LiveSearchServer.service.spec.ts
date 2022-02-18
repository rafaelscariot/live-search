import UnitaryMock from "../__mocks__/unitary.mock";
import LiveSearchServerService from "../../src/services/LiveSearchServer.service";
import LiveSearchServiceErrorsEnum from "../../src/utils/enums/LiveSearchServiceErrors.enum";

describe("LiveSearchServerService", () => {
  it("Service should be defined", () => {
    expect(LiveSearchServerService).toBeDefined();
  });

  describe("When processing a valid request", () => {
    it("Should return the created media object", () => {
      expect(LiveSearchServerService.searchResults("musica")).toEqual(
        UnitaryMock
      );
    });
  });

  describe("When processing an invalid request", () => {
    it("Should return defined with a term that is not in the database", () => {
      expect(LiveSearchServerService.searchResults("novela")).toBeDefined();
    });

    it("Should return INVALID_QUERY_PARAM error", () => {
      expect(LiveSearchServerService.searchResults("")).toEqual(
        new Error(LiveSearchServiceErrorsEnum.INVALID_QUERY_PARAM)
      );
    });
  });
});
