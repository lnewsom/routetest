import { HttpClient } from '@angular/common/http';
import { Chance } from 'chance';
import { mocked } from 'ts-jest/utils';

import { HeaderService } from './header.service';
import { of } from 'rxjs';

const chance: Chance.Chance = new Chance();

jest.setMock('@angular/common/http', {HttpClient});

describe('HeaderService', () => {
  let mockHttpClient: HttpClient;
  let token: string;
  let undertest: HeaderService;
  let actual: string;
  let url: string;

  beforeEach(() => {
    token = chance.string();
    url = chance.string();
    mockHttpClient = new HttpClient(null);
    mockHttpClient.get = jest.fn().mockImplementation(() => of({ access_token: token }));
    undertest = new HeaderService(mockHttpClient);

    undertest.getHeader().subscribe((a) => a = actual);
  });

  test('call httpclient', () => {
    return expect(mockHttpClient.get).toHaveBeenCalled();
  });

  test('calls httpClient.get with correct url', () => {
    const expectedUrl: string = url;

    return expect(mocked(mockHttpClient.get).mock.calls[0][0]).toEqual(expectedUrl);
  });

  test('returns token from http get call', () => {
    return expect(actual).toEqual(token);
  });
});
