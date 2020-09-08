/**
 * @description test demo
 * @author z.w.
 */

 const sum = (a, b) => a + b

 test('10 + 20 should be 30', () => {
     const res = sum(10, 20)
     expect(res).toBe(30)
     expect(res).not.toBe(40)
 })

 