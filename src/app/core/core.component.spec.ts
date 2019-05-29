import { Chance } from 'chance';
import { CoreComponent } from './core.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { async, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const chance: Chance.Chance = new Chance();
jest.mock('@angular/router');

describe('CoreComponent', () => {
  const expectedCoreId: string = chance.string();
  let mockedActivatedRoute: ActivatedRoute;
  let underTest: CoreComponent;

  describe('ngOnInit', () => {
    beforeEach(() => {
      mockedActivatedRoute = new ActivatedRoute();
      mockedActivatedRoute.params = of({coreId: expectedCoreId});
      underTest = new CoreComponent(mockedActivatedRoute);
      underTest.ngOnInit();
    });

    test('sets the correct coreId', () => {
      expect(underTest.coreId).toEqual(expectedCoreId);
    });
  });

  describe('snapshot', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers: [ActivatedRoute],
        declarations: [CoreComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    }));

    test('snapshot matches', () => {
      const fixture = TestBed.createComponent(CoreComponent);
      expect(fixture).toMatchSnapshot();
    });
  });

});
