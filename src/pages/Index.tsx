import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const mockProducts = [
  {
    id: 1,
    title: 'CS:GO Prime Account',
    game: 'CS:GO',
    price: 2500,
    seller: 'ProGamer777',
    rating: 4.9,
    reviews: 156,
    category: 'account',
    image: '🎯'
  },
  {
    id: 2,
    title: 'Dota 2 Immortal Boost',
    game: 'Dota 2',
    price: 4200,
    seller: 'BoostKing',
    rating: 5.0,
    reviews: 243,
    category: 'service',
    image: '⚔️'
  },
  {
    id: 3,
    title: 'League of Legends Smurf',
    game: 'LoL',
    price: 1800,
    seller: 'SmurfMaster',
    rating: 4.8,
    reviews: 89,
    category: 'account',
    image: '🏆'
  },
  {
    id: 4,
    title: 'Valorant VP 5000',
    game: 'Valorant',
    price: 3500,
    seller: 'VPDealer',
    rating: 4.7,
    reviews: 124,
    category: 'currency',
    image: '💎'
  },
  {
    id: 5,
    title: 'WoW Gold 1M',
    game: 'WoW',
    price: 8000,
    seller: 'GoldRush',
    rating: 4.9,
    reviews: 312,
    category: 'currency',
    image: '💰'
  },
  {
    id: 6,
    title: 'Apex Legends Pred Boost',
    game: 'Apex',
    price: 5500,
    seller: 'ApexChampion',
    rating: 5.0,
    reviews: 178,
    category: 'service',
    image: '🔥'
  },
];

const mockTransactions = [
  { id: 1, item: 'CS:GO Prime Account', status: 'completed', date: '2025-12-10', amount: 2500 },
  { id: 2, item: 'Dota 2 Boost', status: 'active', date: '2025-12-12', amount: 4200 },
  { id: 3, item: 'LoL Smurf', status: 'completed', date: '2025-12-08', amount: 1800 },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.game.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === 'all' || product.game === selectedGame;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesGame && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🎮</div>
              <h1 className="text-3xl font-bold neon-glow text-primary">GameTrade</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Store" size={20} className="mr-2" />
                Магазин
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Shield" size={20} className="mr-2" />
                Безопасность
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Поддержка
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Icon name="Bell" size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full text-xs flex items-center justify-center animate-pulse-slow">3</span>
              </Button>

              <Button variant="ghost" size="icon">
                <Avatar className="h-9 w-9 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                </Avatar>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold neon-glow text-primary">Маркетплейс игровых товаров</h2>
            <p className="text-muted-foreground text-lg">Безопасные сделки • Проверенные продавцы • Быстрая поддержка</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Поиск игр, аккаунтов, услуг..." 
                className="pl-10 h-12 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedGame} onValueChange={setSelectedGame}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Все игры" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все игры</SelectItem>
                <SelectItem value="CS:GO">CS:GO</SelectItem>
                <SelectItem value="Dota 2">Dota 2</SelectItem>
                <SelectItem value="LoL">League of Legends</SelectItem>
                <SelectItem value="Valorant">Valorant</SelectItem>
                <SelectItem value="WoW">World of Warcraft</SelectItem>
                <SelectItem value="Apex">Apex Legends</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="account">Аккаунты</SelectItem>
                <SelectItem value="currency">Валюта</SelectItem>
                <SelectItem value="service">Услуги</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="catalog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-14">
            <TabsTrigger value="catalog" className="text-base">
              <Icon name="Store" size={20} className="mr-2" />
              Каталог
            </TabsTrigger>
            <TabsTrigger value="my-deals" className="text-base">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Мои сделки
            </TabsTrigger>
            <TabsTrigger value="chat" className="text-base">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Чат
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover-scale cursor-pointer border-2 border-border hover:border-primary transition-all overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-5xl">{product.image}</div>
                        <div>
                          <Badge variant="outline" className="mb-2">{product.game}</Badge>
                          <CardTitle className="text-xl leading-tight">{product.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-primary">
                          <AvatarFallback className="text-xs bg-primary/20">{product.seller[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{product.seller}</p>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={12} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="capitalize">
                        {product.category === 'account' && 'Аккаунт'}
                        {product.category === 'currency' && 'Валюта'}
                        {product.category === 'service' && 'Услуга'}
                      </Badge>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-primary">{product.price} ₽</p>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-deals">
            <div className="space-y-4">
              {mockTransactions.map(tx => (
                <Card key={tx.id} className="hover-scale cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tx.status === 'completed' ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
                          <Icon name={tx.status === 'completed' ? 'CheckCircle2' : 'Clock'} size={24} className={tx.status === 'completed' ? 'text-green-500' : 'text-yellow-500'} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{tx.item}</h3>
                          <p className="text-sm text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{tx.amount} ₽</p>
                        <Badge variant={tx.status === 'completed' ? 'default' : 'secondary'}>
                          {tx.status === 'completed' ? 'Завершена' : 'В процессе'}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chat">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarFallback className="bg-primary/20">PG</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">ProGamer777</CardTitle>
                    <p className="text-xs text-muted-foreground">Онлайн</p>
                  </div>
                  <Badge className="bg-green-500">
                    <Icon name="Shield" size={14} className="mr-1" />
                    Безопасная сделка
                  </Badge>
                </div>
              </CardHeader>
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/20 text-xs">PG</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[70%]">
                      <p>Здравствуйте! Аккаунт готов к передаче. Оплата уже прошла через безопасную сделку.</p>
                      <p className="text-xs text-muted-foreground mt-2">14:32</p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary rounded-2xl rounded-tr-none p-4 max-w-[70%]">
                      <p className="text-primary-foreground">Отлично! Какие данные для входа?</p>
                      <p className="text-xs text-primary-foreground/70 mt-2">14:35</p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">JD</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/20 text-xs">PG</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[70%]">
                      <p>Сейчас отправлю в личные сообщения после подтверждения транзакции модератором.</p>
                      <p className="text-xs text-muted-foreground mt-2">14:36</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input placeholder="Написать сообщение..." className="flex-1" />
                  <Button size="icon" className="bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
            <CardContent className="p-6 text-center">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Безопасные сделки</h3>
              <p className="text-sm text-muted-foreground">Escrow-система защищает ваши средства до завершения сделки</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary">
            <CardContent className="p-6 text-center">
              <Icon name="BadgeCheck" size={48} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Верификация</h3>
              <p className="text-sm text-muted-foreground">Все продавцы проходят многоуровневую проверку личности</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent">
            <CardContent className="p-6 text-center">
              <Icon name="Headphones" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground">Команда модераторов всегда на связи для решения споров</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="border-t border-border mt-16 bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎮</div>
              <div>
                <h3 className="text-xl font-bold text-primary">GameTrade</h3>
                <p className="text-xs text-muted-foreground">Безопасный игровой маркетплейс</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">О платформе</Button>
              <Button variant="ghost" size="sm">Правила</Button>
              <Button variant="ghost" size="sm">FAQ</Button>
              <Button variant="ghost" size="sm">Контакты</Button>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-center text-sm text-muted-foreground">© 2025 GameTrade. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
