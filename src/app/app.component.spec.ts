import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

jest.mock('@angular/core');

describe('AppComponent', () => {
  describe('snapshot', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    }));

  test('should match snapshot', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);

    expect(fixture).toMatchSnapshot();

  });
  });
});
