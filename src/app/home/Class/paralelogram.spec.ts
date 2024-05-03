import {Paralelogram} from "./paralelogram";


describe('Paralelogram Testing', () => {
    let paral: Paralelogram;
  
    beforeEach(() => {
        paral = new Paralelogram("yellow");
    })
    it('should create parallelogram', () => {
        expect(paral).toBeTruthy();
      });
});
