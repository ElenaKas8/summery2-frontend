
    const workingSpaceData = [
        {
          id: 1,
          title: 'Front working space',
          image: 'media/image20240301113748.png'
        },
        {
          id: 2,
          title: 'Meeting corner',
          image: 'media/image20240301113720.png'
        },
        {
          id: 3,
          title: 'Guest meeting room',
          image: 'media/image20240301113737.png'
          
        },
        {
          id: 4,
          title: 'Guest rest room',
          image: 'media/image20240301113743.png'
        },
        {
          id: 5,
          title: 'Single working space',
          image: 'media/image20240301113752.png'
        },
        {
          id: 6,
          title: 'Kitchen room',
          image: 'media/image20240301113748.png'
        }
      ]
      
      const roomsContainer = document.querySelector('.rooms_container');
      
      workingSpaceData.forEach(el => {
        const cardElem = document.createElement('div');
      
        cardElem.innerText = el.title;
      
        cardElem.style.backgroundImage = `url('${el.image}')`;
      
        roomsContainer.append(cardElem);
      });
      
      const exploreMoreBtn = document.createElement('div');
      exploreMoreBtn.innerText = 'Explore More >';
      exploreMoreBtn.classList.add('explore_more_btn');
      roomsContainer.append(exploreMoreBtn);
  