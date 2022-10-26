import { saveQuestion } from "../utils/api";

describe('save question function test', () => {
    it('should return true when the correct data is passed', async() => {
        var optionOneText = "Sample option one text.";
        var optionTwoText = "Sample option two text.";
        var author = 'sarahedo';
    
        var expectedQuestion = {
            author: 'sarahedo',
            optionOne: { votes: [], text: 'Sample option one text.' },
            optionTwo: { votes: [], text: 'Sample option two text.' }
        }

        var result = await saveQuestion({optionOneText, optionTwoText, author});
        expect(result.author).toBe(expectedQuestion.author);
        expect(result.optionOne.text).toBe(expectedQuestion.optionOne.text);
        expect(result.optionTwo.text).toBe(expectedQuestion.optionTwo.text);
    });

    it('should return an error if the incorrect data is passed', async() => {
        var optionOneText = "Sample option one text.";
        var author = 'sarahedo';

        await expect(saveQuestion({optionOneText, author})).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
        
    })
});