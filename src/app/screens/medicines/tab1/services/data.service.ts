import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  price?: number;
  category?: string;
  description?: string;
  read: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Acetaminofén',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false,
      price: 13.0,
      category: 'Analgésico',
      description:
        'El paracetamol, también conocido como acetaminofén o acetaminofeno o p-Acetilaminofenol, es un fármaco con propiedades analgésicas y antipiréticas utilizado principalmente para tratar la fiebre y el dolor leve y moderado, ​​ aunque su eficacia en el alivio de la fiebre en niños no está clara.​​',
    },
    {
      fromName: 'Ibuprofeno',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false,
      price: 16.55,
      category: 'Analgésico',
      description:
        'El ibuprofeno es un antiinflamatorio no esteroideo, utilizado frecuentemente como antipirético, analgésico y antiinflamatorio.',
    },
    {
      fromName: 'Tramadol',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false,
      price: 15650,
      category: 'Analgésico',
      description:
        'El tramadol es un analgésico opioide atípico que alivia el dolor actuando sobre células nerviosas específicas de la médula espinal y del cerebro. Su comportamiento es igual al comparado con otros opioides del tipo de la morfina.',
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false,
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false,
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false,
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 8,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 9,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 10,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 11,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 12,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 13,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 14,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 15,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 16,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 17,
      read: false,
    },
  ];

  constructor() {}

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
