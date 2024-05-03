import {Romb} from "./romb";


describe('Romb Testing', () => {
    let romb: Romb;
  
    beforeEach(() => {
        romb = new Romb("yellow");
    })
    it('should create romb', () => {
        expect(romb).toBeTruthy();
      });
});
