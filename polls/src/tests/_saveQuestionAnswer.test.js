import { saveQuestionAnswer } from "../utils/api";

describe('save question answer function test', () => {
    it('should return true when the correct data is passed', async() => {
        var authedUser = "sarahedo";
        var qid = "xj352vofupe1dqz9emx13r";
        var answer = 'optionTwo';

        var result = await saveQuestionAnswer({authedUser, qid, answer});
        expect(result).toBe(true);
    });

    it('should return an error if the incorrect data is passed', async() => {
        var authedUser = "user1";
        var answer = "optionOne";

        await expect(saveQuestionAnswer({authedUser, answer})).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});