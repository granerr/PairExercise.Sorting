describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with length of 1', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with length above 1', function(){
    expect( bubbleSort([2, 4, 5, 3]) ).toEqual( [2, 3, 4, 5] );
  });
});

describe('Swap Performance', function() {
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('calls a swap function 2 times', function () {
    bubbleSort([2, 4, 5, 3]);
    expect(swap.calls.count()).toEqual(2);
  });
})

describe('Compare Performance', function() {
  beforeAll(function () {
    spyOn(window, 'compare').and.callThrough();
  });

  it('calls a compare function 9 times', function () {
    bubbleSort([2, 4, 5, 3]);
    expect(compare.calls.count()).toEqual(9);
  });
})

