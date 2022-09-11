import React from 'react';
import PersonList from './PersonList';

const fakeData = [
{"id":2,"name":"Gunther Heinsen","email":"gheinsen1@pen.io","avatar":"https://robohash.org/teneturutenim.png?size=200x200&set=set1","description":"Diffuse large B-cell lymphoma, extranodal and solid organ sites"},
{"id":3,"name":"Oralia Siebart","email":"osiebart2@photobucket.com","avatar":"https://robohash.org/quiplaceatex.png?size=200x200&set=set1","description":"Poisoning by opium, accidental (unintentional), sequela"},
{"id":4,"name":"Tobe Bonellie","email":"tbonellie3@livejournal.com","avatar":"https://robohash.org/excumqueenim.png?size=200x200&set=set1","description":"Corrosion of second degree of right hand, unspecified site, initial encounter"},
{"id":5,"name":"Lib Haughan","email":"lhaughan4@barnesandnoble.com","avatar":"https://robohash.org/nondoloremqueet.png?size=200x200&set=set1","description":"Intentional self-harm by jumping or lying in front of motor vehicle, initial encounter"},
];

function PersonFinder() {
  return (
    <section>
      <input type="search" placeholder="Search in Air HQ"/>
      <PersonList people={fakeData}/>
    </section>
  );
}

export default PersonFinder;