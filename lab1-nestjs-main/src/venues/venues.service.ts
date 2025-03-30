import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {
  private venues: { id: string; name: string; location: string; capacity: number }[] = [];

  create(venueDto: { name: string; location: string; capacity: number }) {
    const newVenue = { id: Date.now().toString(), ...venueDto };
    this.venues.push(newVenue); // Không còn lỗi TypeScript
    return newVenue;
  }

  findAll() {
    return this.venues;
  }

  update(id: string, venueDto: { name?: string; location?: string; capacity?: number }) {
    const venueIndex = this.venues.findIndex((v) => v.id === id);
    if (venueIndex === -1) return null;

    this.venues[venueIndex] = { ...this.venues[venueIndex], ...venueDto };
    return this.venues[venueIndex];
  }

  delete(id: string) {
    this.venues = this.venues.filter((v) => v.id !== id);
    return { message: 'Deleted successfully' };
  }
}
