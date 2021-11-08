import { render, screen } from '@testing-library/react';
import SuperHeroDetail from './superhero-detail';

//Arrange
beforeEach(() => {
  render(<SuperHeroDetail />);
});

describe('Render Tests SuperHeroDetails Component', () => {
  test('Render Header', () => {
    //Act
    const heroDetail = screen.getByText(/the Amazing Spiderman/i);
    //Assert
    expect(heroDetail).toBeInTheDocument();
  });
  test('Render Img Top principal', () => {
    // Act
    const topImage = screen.getByAltText('spiderman');
    // Assert
    expect(topImage).toBeInTheDocument();
  });
  test('Render description', () => {
    // Act
    const description = screen.getByText(/fistrum/gi);
    // Assert
    expect(description).toBeInTheDocument();
  });
  test('Render table', () => {
    // Act
    const tabla = screen.getByRole('table');
    // Assert
    expect(tabla).toBeInTheDocument();
  });
  test('Series images must be appears', () => {
    //Act
    const Imageserie01 = screen.queryByAltText(/Superior Spiderman/i);
    expect(Imageserie01).toBeInTheDocument();
  });
});
