import React, { FC, useEffect, useRef, useState } from 'react';

import Posts from './Tabs/Posts';
import Users from './Tabs/Users';
import { getCookie } from 'utils/cookieUtils';
import { api } from 'utils/apiUtils';

import * as S from './styles';

type User = {
  avatarUrl: string;
  fullName: string;
};

type Post = {
  id: string;
  user: User;
  createdAt: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
};

type Filters = {
  date: boolean;
  popular: boolean;
  [key: string]: boolean;
};

const Home: FC = () => {
  const menuRef = useRef(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [filters, setFilters] = useState<Filters>({
    date: false,
    popular: false,
  });
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const tabs = [
    {
      title: 'Posts',
      content: <Posts posts={posts} />,
      to: '',
    },
    {
      title: 'Users',
      content: <Users />,
      to: '',
    },
  ];

  const handleTabClick = (index: number): void => {
    setActiveTab(index);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    setInputValue(target.value);
  };

  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target;

    setFilters((prev) => {
      const updatedFilters = { ...prev };
      Object.keys(updatedFilters).forEach((filterName) => {
        updatedFilters[filterName] = filterName === name ? checked : false;
      });

      return updatedFilters;
    });
  };

  const sortedByDate = (data: Post[]): Post[] => {
    return [...data].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  };

  const sortedByPopular = (data: Post[]) => {
    return [...data].sort((a, b) => b.viewsCount - a.viewsCount);
  };

  useEffect(() => {
    (async () => {
      const sessionPosts = sessionStorage.getItem('posts');
      if (sessionPosts) {
        setPosts(JSON.parse(sessionPosts));
      } else {
        const token = getCookie('token');
        const data = await api.get('posts', token);

        setPosts(data);
        sessionStorage.setItem('posts', JSON.stringify(data));
      }
    })();
  }, []);

  useEffect(() => {
    if (filters.date) {
      setPosts((prevState) => sortedByDate(prevState));
    } else if (filters.popular) {
      setPosts((prevState) => sortedByPopular(prevState));
    } else if (!filters.date && !filters.popular) {
      const sessionPosts = sessionStorage.getItem('posts');
      sessionPosts ? setPosts(JSON.parse(sessionPosts)) : '';
    }
  }, [filters.date, filters.popular]);

  useEffect(() => {
    const handleScroll = () => {
      const mainBlock: HTMLElement | null = document.querySelector('main')!;
      const currentScrollPos = mainBlock.scrollTop;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    document.querySelector('main')!.addEventListener('scroll', handleScroll);
    return () => {
      document.querySelector('main')!.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <S.Wrapper>
      <S.Header className={visible ? '' : 'hidden'}>
        <S.Filters>
          <S.IconWrapper
            ref={menuRef}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <S.FilterIcon className={isOpen ? 'opened' : ''} />
          </S.IconWrapper>
          <S.FiltersMenu className={isOpen ? 'opened' : ''}>
            <S.MenuItem>
              <S.CheckboxLabel>
                <S.InputCheck
                  type='checkbox'
                  name='date'
                  checked={filters.date}
                  onChange={handleFiltersChange}
                />
                <S.Span>Date</S.Span>
              </S.CheckboxLabel>
            </S.MenuItem>
            <S.MenuItem>
              <S.CheckboxLabel>
                <S.InputCheck
                  type='checkbox'
                  name='popular'
                  checked={filters.popular}
                  onChange={handleFiltersChange}
                />
                <S.Span>Popular</S.Span>
              </S.CheckboxLabel>
            </S.MenuItem>
          </S.FiltersMenu>
        </S.Filters>
        <S.SearchInput
          name='search'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Search...'
          type='text'
        />
        <S.Tabs className={activeTab === 0 ? 'left' : 'right'}>
          {tabs.map((tab, index) =>
            activeTab === index ? (
              <S.ActiveTab key={index} onClick={() => handleTabClick(index)} to={tab.to}>
                {tab.title}
              </S.ActiveTab>
            ) : (
              <S.Tab key={index} onClick={() => handleTabClick(index)} to={tab.to}>
                {tab.title}
              </S.Tab>
            ),
          )}
        </S.Tabs>
        <S.MakePostBtn to='create-post'>Make Post</S.MakePostBtn>
      </S.Header>
      <div className='tab-content'>{tabs[activeTab].content}</div>
    </S.Wrapper>
  );
};

export default Home;
