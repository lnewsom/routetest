import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent } from './feature.component';
import { ActivatedRoute } from '@angular/router';

jest.mock('@angular/router');
describe('FeatureComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ActivatedRoute],
      declarations: [FeatureComponent]
    }).compileComponents();
  }));

  test('snapshot matches', () => {
    const fixture = TestBed.createComponent(FeatureComponent);
    expect(fixture).toMatchSnapshot();
  });
});
