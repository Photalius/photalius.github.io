import {useState} from 'react';
import {useStore} from '../../../../state/store';
import {
  StickerCategory,
  StickerCategoryMessages,
} from '../../../../config/default-stickers';
import {ButtonGroup} from '@common/ui/buttons/button-group';
import {Button} from '@common/ui/buttons/button';
import {StickerList} from './sticker-list';
import {Trans} from '@common/i18n/trans';

export function StickerNav() {
  const categories = useStore(s => s.config.tools?.stickers?.items) || [];
  const [selectedCategory, setSelectedCategory] =
    useState<StickerCategory | null>(categories[0]);

  const categoryBtns = categories.map(category => {
    const isSelected = selectedCategory === category;
    const msg = StickerCategoryMessages[category.name];
    return (
      <Button
        key={category.name}
        size="xs"
        color={isSelected ? 'primary' : null}
        value={category}
      >
        <span className="capitalize">
          {msg ? <Trans {...msg} /> : category.name}
        </span>
      </Button>
    );
  });

  return (
    <div className="h-92">
      <ButtonGroup
        value={selectedCategory}
        onChange={newCategory => setSelectedCategory(newCategory)}
        className="mb-10 w-full justify-center"
        variant="outline"
        radius="rounded-full"
      >
        {categoryBtns}
      </ButtonGroup>
      {selectedCategory && <StickerList category={selectedCategory} />}
    </div>
  );
}
