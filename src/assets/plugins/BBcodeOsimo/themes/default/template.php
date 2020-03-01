<div class="osimo-editor-wrap">
	<div class="osimo-editor-controls-wrap">
		<div class="osimo-editor-controls-content">
			<img src="<?php echo THEMEPATH?>img/text_bold.png" class="osimo-editor-button osimo-editor-text-bold" alt="text-bold" title="Pogrubienie" />
			<img src="<?php echo THEMEPATH?>img/text_italic.png" class="osimo-editor-button osimo-editor-text-italic" alt="text-italic" title="Kursywa" />
			<img src="<?php echo THEMEPATH?>img/text_underline.png" class="osimo-editor-button osimo-editor-text-underline" alt="text-underline" title="Podkreślenie" />

			<img src="<?php echo THEMEPATH?>img/divider.png" class="osimo-editor-divider" />

			<img src="<?php echo THEMEPATH?>img/text_list_bullets.png" class="osimo-editor-button osimo-editor-bullet-list" alt="text-list-bullets" title="Lista"/>
			<img src="<?php echo THEMEPATH?>img/image_add.png" class="osimo-editor-button osimo-editor-image-add" alt="image-add" title="Dodaj obrazek" />
			<img src="<?php echo THEMEPATH?>img/link_add.png" class="osimo-editor-button osimo-editor-link-add" alt="link-add" title="Dodaj link" />
			<img src="<?php echo THEMEPATH?>img/email_add.png" class="osimo-editor-button osimo-editor-email-add" alt="email-add" title="Dodaj adres e-mail" />

			<select class="osimo-editor-menu osimo-editor-font-size">
				<?php echo getFontSizeItems()?>
			</select>

			<img src="<?php echo THEMEPATH?>img/divider.png" class="osimo-editor-divider" />

			<select class="osimo-editor-menu osimo-editor-font-color">
				<?php echo getColorPickerItems()?>
			</select>
		</div>
	</div>
	<div class="osimo-editor-textarea-wrap">
		{*osimo_editor*}
	</div>
</div>