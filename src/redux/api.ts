import sample from 'lodash/sample';

export const apiCall = (value?: any): Promise<void | string> => {
    const promise = new Promise<void | string>((resolve, reject) => {
      setTimeout(() => {
        if (sample([true, false]))
            resolve('Success :)');
        else 
            reject(new Error('Error :('))
      }, 1000)
    });
  
    return promise;
}